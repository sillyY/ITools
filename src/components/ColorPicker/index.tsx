import React, { useState, useRef, CSSProperties } from 'react'
import {
  SketchPicker,
  BlockPicker,
  Color,
  ColorChangeHandler,
} from 'react-color'
import { Container, Trigger, TriggerInner, PickBox } from './styled'
import { useOnClickOutside } from '../../hooks'

interface Props {
  color: Color
  onChange?: ColorChangeHandler
}

const ColorPicker = (props: Props) => {
  const { color, onChange } = props
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setVisible(false))
  return (
    <Container>
      <Trigger ref={ref} onClick={() => setVisible(!visible)}>
        <TriggerInner color={color} />
        <i className="iconfont iconxiala" />
      </Trigger>
      {visible && (
        <PickBox ref={ref}>
          <BlockPicker
            color={color}
            onChangeComplete={(color, e) => {
              setVisible(false)
              onChange!(color, e)
            }}
          />
        </PickBox>
      )}
    </Container>
  )
}

ColorPicker.defaultProps = {
  color: '#fff',
}
export default ColorPicker

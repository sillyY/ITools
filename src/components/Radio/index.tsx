import React, { SFC, useContext, useEffect, useState } from 'react'
import { Label, Input, Text } from './styled'
import { RadioGroupContext } from '../RadioGroup'

interface Props {
  value: number | string
  name?: string
  checked?: boolean
  onChange?: (e: any) => void
}

const Radio: SFC<Props> = (props) => {
  const context = useContext(RadioGroupContext)
  const { value, children, name, checked } = props
  const [innerChecked, setInnerCheck] = useState(checked)
  useEffect(() => {
    if (
      !checked &&
      context !== undefined &&
      (context as any).value !== undefined
    ) {
      setInnerCheck(value === (context as any).value ? true : false)
    }
  }, [checked, value, context])

  const triggerChange = (e: any) => {
    if ((context as any).onChange) {
      return (context as any).onChange(e)
    }
  }
  return (
    <Label>
      <Input
        type="radio"
        value={value}
        name={name}
        checked={innerChecked}
        onChange={triggerChange}
      />
      <Text>{children}</Text>
    </Label>
  )
}
Radio.defaultProps = {
  checked: false,
}

export default Radio

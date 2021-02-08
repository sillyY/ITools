import React, { useState } from 'react'
import {
  Wrapper,
  Container,
  PickerWrapper,
  DirectionWrapper,
  Placeholder,
  Square,
  Label,
} from './styled'
import { Row, Col, Form, InputNumber, Radio, Slider } from 'antd'
//@ts-ignore
import ColorPicker from 'rc-color-picker'

import 'rc-color-picker/assets/index.css'
import { State } from '..'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

export const enum Direction {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  LeftTop = 'leftTop',
  RightTop = 'rightTop',
  LeftBottom = 'leftBottom',
  RightBottom = 'rightBottom',
}

export const normalDirection = [
  Direction.Top,
  Direction.Bottom,
  Direction.Left,
  Direction.Right,
]
export const specialDirection = [
  Direction.LeftTop,
  Direction.RightTop,
  Direction.LeftBottom,
  Direction.RightBottom,
]

export const enum TriangleType {
  Equilateral = 'equilateral',
  Isosceles = 'isosceles',
}

export interface Props {
  state: State
  onChange: (state: State) => void
}

const Setup: React.FC<Props> = (props) => {
  const [color, setColor] = useState(props.state.color)
  const [direction, setDirection] = useState(props.state.direction)
  const [type, setType] = useState(props.state.type)
  const [form] = Form.useForm()

  const setActiveCls = (dir: Direction) => (dir === direction ? 'active' : '')

  const triggerChangeDirection = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDirection(e.target.value as Direction)

  const onChange = (value: any, data: any) => {
    props.onChange({...data,color})
  }
  return (
    <Wrapper>
      <Container>
        <Form {...layout} initialValues={props.state} onValuesChange={onChange}>
          <Form.Item name="direction" label="方向">
            <DirectionWrapper>
              <Placeholder />
              <Square className="rotate">
                <Label htmlFor="top" className={setActiveCls(Direction.Top)}>
                  <input
                    type="radio"
                    name="direction"
                    id="top"
                    value="top"
                    onChange={triggerChangeDirection}
                  />
                </Label>
                <Label
                  htmlFor="right"
                  className={setActiveCls(Direction.Right)}
                >
                  <input
                    type="radio"
                    name="direction"
                    id="right"
                    value="right"
                    onChange={triggerChangeDirection}
                  />
                </Label>
                <Label htmlFor="left" className={setActiveCls(Direction.Left)}>
                  <input
                    type="radio"
                    name="direction"
                    id="left"
                    value="left"
                    onChange={triggerChangeDirection}
                  />
                </Label>
                <Label
                  htmlFor="bottom"
                  className={setActiveCls(Direction.Bottom)}
                >
                  <input
                    type="radio"
                    name="direction"
                    id="bottom"
                    value="bottom"
                    onChange={triggerChangeDirection}
                  />
                </Label>
              </Square>
              <Square>
                <Label
                  htmlFor="leftTop"
                  className={setActiveCls(Direction.LeftTop)}
                >
                  <input
                    type="radio"
                    name="direction"
                    id="leftTop"
                    value="leftTop"
                    onChange={triggerChangeDirection}
                  />
                </Label>
                <Label
                  htmlFor="rightTop"
                  className={setActiveCls(Direction.RightTop)}
                >
                  <input
                    type="radio"
                    name="direction"
                    id="rightTop"
                    value="rightTop"
                    onChange={triggerChangeDirection}
                  />
                </Label>
                <Label
                  htmlFor="leftBottom"
                  className={setActiveCls(Direction.LeftBottom)}
                >
                  <input
                    type="radio"
                    name="direction"
                    id="leftBottom"
                    value="leftBottom"
                    onChange={triggerChangeDirection}
                  />
                </Label>
                <Label
                  htmlFor="rightBottom"
                  className={setActiveCls(Direction.RightBottom)}
                >
                  <input
                    type="radio"
                    name="direction"
                    id="rightBottom"
                    value="rightBottom"
                    onChange={triggerChangeDirection}
                  />
                </Label>
              </Square>
            </DirectionWrapper>
          </Form.Item>
          <Form.Item name="type" label="类型">
            <Radio.Group value={type}>
              <Radio value={TriangleType.Equilateral}>等边</Radio>
              <Radio value={TriangleType.Isosceles}>等腰</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="width" label="宽度">
            <Slider min={0} max={300} />
          </Form.Item>
          <Form.Item name="height" label="高度">
            <Slider min={0} max={300} />
          </Form.Item>
          <Form.Item name="angle" label="旋转角度">
            <Slider min={0} max={360} />
          </Form.Item>
          <Form.Item label="背景色">
            <PickerWrapper>
              <ColorPicker
                animation="slide-up"
                color={color}
                onChange={({ color }: any) => setColor(color)}
              />
            </PickerWrapper>
          </Form.Item>
        </Form>
      </Container>
    </Wrapper>
  )
}

export default Setup

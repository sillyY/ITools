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
import { Form, InputNumber, Radio, Slider } from 'antd'
//@ts-ignore
import ColorPicker from 'rc-color-picker'

import 'rc-color-picker/assets/index.css'

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

export const enum TriangleType {
  Equilateral = 'equilateral',
  Isosceles = 'isosceles',
  Scalene = 'scalene',
}

const Setup: React.FC = () => {
  const [color, setColor] = useState('#a050f6')
  const [direction, setDirection] = useState(Direction.Top)
  const [type, setType] = useState(TriangleType.Isosceles)

  const setActiveCls = (dir: Direction) => (dir === direction ? 'active' : '')

  const triggerChangeDirection = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDirection(e.target.value as Direction)

  return (
    <Wrapper>
      <Container>
        <Form
          {...layout}
          initialValues={{
            direction: Direction.Top,
            width: 20,
            height: 20,
            angle: 0,
            type: TriangleType.Isosceles,
          }}
        >
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
              <Radio value={TriangleType.Scalene}>不等边</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="width" label="宽度">
            <InputNumber min={0} max={300} step={1} />
          </Form.Item>
          <Form.Item >
            <InputNumber min={0} max={300} step={1} />
          </Form.Item>
          <Form.Item name="height" label="高度">
            <InputNumber min={0} max={300} step={1} />
          </Form.Item>
          <Form.Item name="angle" label="旋转角度">
            <Slider />
          </Form.Item>
          <Form.Item name="bgColor" label="背景色">
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

import React, { useState } from 'react'
import { Wrapper, Container, OperateContaier, Title, Subtitle } from './styled'
import Setup, { Direction, TriangleType } from './setup'
import View, { Props } from './view'
import Code from './code'

export interface State {
  direction: Direction
  width: number
  height: number
  angle: number
  type: TriangleType
  color: string
}

const Triangle: React.FC = () => {
  const [borderWidth, setBorderWidth] = useState('')
  const [borderColor, setBorderColor] = useState('')

  const [state, setState] = useState<State>({
    direction: Direction.Top,
    width: 20,
    height: 20,
    angle: 0,
    type: TriangleType.Isosceles,
    color: '#a050f6',
  })
  
  const onChange = (state: State) => {
    setState(state)
  }
  return (
    <Wrapper>
      <Title>三角形样式构造器</Title>
      <Container>
        <OperateContaier>
          <Setup {...{ state, onChange }} />
          <View {...{ borderWidth, borderColor }} />
        </OperateContaier>
        <Subtitle>CSS代码</Subtitle>
        <Code />
      </Container>
    </Wrapper>
  )
}

export default Triangle

import React, { useState } from 'react'
import { Wrapper, Container, OperateContaier, Title, Subtitle } from './styled'
import Setup from './setup'
import View, { Props } from './view'
import Code from './code'

const Triangle: React.FC = () => {
  const [borderWidth, setBorderWidth] = useState('')
  const [borderColor, setBorderColor] = useState('')

  const onChange = ({ borderWidth, borderColor }: Props) => {
    setBorderWidth(borderWidth)
    setBorderColor(borderColor)
  }
  return (
    <Wrapper>
      <Title>三角形样式构造器</Title>
      <Container>
        <OperateContaier>
          <Setup {...{ borderWidth, borderColor, onChange }} />
          <View {...{ borderWidth, borderColor }} />
        </OperateContaier>
        <Subtitle>CSS代码</Subtitle>
        <Code />
      </Container>
    </Wrapper>
  )
}

export default Triangle

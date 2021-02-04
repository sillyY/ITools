import React from 'react'
import { Wrapper, Container, OperateContaier, Title, Subtitle } from './styled'
import Setup from './setup'
import View from './view'
import Code from './code'

const Triangle: React.FC = () => {
  return (
    <Wrapper>
      <Title>三角形样式构造器</Title>
      <Container>
        <OperateContaier>
          <Setup />
          <View />
        </OperateContaier>
        <Subtitle>CSS代码</Subtitle>
        <Code />
      </Container>
    </Wrapper>
  )
}

export default Triangle

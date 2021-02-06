import React from 'react'
import { Wrapper, Container } from './styled'

export interface Props {
  borderWidth: string
  borderColor: string
}

const View: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Container {...props}></Container>
    </Wrapper>
  )
}

export default View

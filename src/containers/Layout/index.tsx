import React from 'react'
import { connect } from 'react-redux'
import { Container, Main } from './styled'
import Aside from '../Aside'

interface Props {
  logo?: string
  className?: string
  alt?: string
  visible: boolean
  children?: any
}

const Layout: React.SFC<Props> = (props) => {
  const { visible, children } = props
  return (
    <Container>
      <Main visible={visible}>
        <Aside />
        {children}
      </Main>
    </Container>
  )
}
export default connect((state: any) => ({
  visible: state.common.asideVisible,
}))(Layout)

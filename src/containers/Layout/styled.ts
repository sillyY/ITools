import styled from 'styled-components'
import { mainBackgroundColor, asideWidth } from '../../theme'

export const Container = styled.div`
  position: relative;
`
export const Main: any = styled.main`
  position: relative;
  height: 100vh;
  background-color: ${mainBackgroundColor};
  padding-left: ${({ visible }: any) => (visible ? asideWidth : 0)};
  transition: padding-left 1s;
`

Main.defaultProps = {
  kind: 'default',
}

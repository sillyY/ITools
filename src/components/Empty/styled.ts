import styled from 'styled-components'
import { emptyColor } from '../../theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 32px 8px;
  text-align: center;
`

export const ImgBox = styled.div<any>`
  height: 60px;
  margin-bottom: 8px;
`

export const Img = styled.img`
  height: 100%;
  margin: auto;
`

export const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${emptyColor};
`
Description.defaultProps = {
  kind: 'default',
}

export const SlotBox = styled.div``

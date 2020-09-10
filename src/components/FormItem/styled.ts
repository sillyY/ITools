import styled from 'styled-components'

export const Container: any = styled.div`
  display: ${({ inline }: any) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: column;
  box-sizing: border-box;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  margin: 0 0 24px;
  vertical-align: top;
`

export const LabelBox = styled.div`
`

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 32px;
  &::after {
    content: ':';
    position: relative;
    top: -0.5px;
    margin: 0 8px 0 2px;
  }
`

export const ControlBox = styled.div`
`

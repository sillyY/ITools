import styled from 'styled-components'

export const Container = styled.div``

export const Trigger = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  padding: 4px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 0;
  position: relative;
  cursor: pointer;
  i {
    position: absolute;
    color: #fff;
  }
`

export const TriggerInner: any = styled.span`
  position: relative;
  display: block;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: ${({ color }) => (color ? color : 'transparent')};
`

export const PickBox = styled.div`
  position: absolute;
  z-index: 98;
`

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
`

export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  z-index: 9;
  width: 60px;
  height: 60px;
`
export const Square = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  &.rotate {
    width: 85px;
    height: 85px;
    transform: rotate(45deg);
    z-index: 2;
    bottom: 0;
    right: 0;
    margin: auto;
    label {
      background: #8e98f5;
      &:hover {
        background: #7874f2;
      }
    }
  }
`

export const Label = styled.label`
  background: #d1f4fa;
  width: 50%;
  height: 50%;
  float: left;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    background: #53cde2;
  }
  &.active {
    background: #ff1f5a !important;
  }
`

export const Input = styled.input`
  display: none;
`

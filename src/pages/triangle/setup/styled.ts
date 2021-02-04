import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 25rem;
  height: 30rem;
  background-color: #fff;
`

export const Container = styled.div`
  padding: 20px;
`

export const DirectionWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
`

export const Placeholder = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  z-index: 10;
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
  z-index: 1;
  label {
    background-color: #50c0f4;
    &.active {
      background-color: #ff7092;
    }
  }
  &.rotate {
    width: 85px;
    height: 85px;
    transform: rotate(45deg);
    z-index: 2;
    bottom: 0;
    right: 0;
    margin: auto;
    label {
      background-color: #3b9af6;
      &.active {
        background-color: #ff7092;
      }
    }
  }
`

export const Label = styled.label`
  width: 50%;
  height: 50%;
  float: left;
  cursor: pointer;
  transition: all 0.3s;

  input {
    display: none;
  }
`

export const PickerWrapper = styled.div`
  margin-top: 4px;
`

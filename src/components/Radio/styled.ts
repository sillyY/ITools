import styled from 'styled-components'

export const Label = styled.label`
  box-sizing: border-box;
  margin-right: 8px;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
`

export const Input = styled.input`
  position: relative;
  background: #2f49d0;
  border: none;
  transition: 0.3s;
  outline: 0;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    border-color: #85919f;
  }
  &:checked {
    @-webkit-keyframes scale-in {
      to {
        transform: scale(1);
      }
    }

    @keyframes scale-in {
      to {
        transform: scale(1);
      }
    }
    &::before {
      -webkit-animation: scale-in 0.1s 0.2s linear forwards;
      animation: scale-in 0.1s 0.2s linear forwards;
    }
    &::after {
      transform: scale(0);
    }
  }
  &::before {
    top: 1px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    position: absolute;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18px' height='18px' fill='none' stroke-width='2px' stroke='white' stroke-linecap='round' viewBox='0 0 21 21'%3E%3Cpolyline points='5 10.75 8.5 14.25 16 6'%3E%3C/polyline%3E%3C/svg%3E");
    transform: scale(0);
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: white;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px #cdd2da;
    transition: 0.2s;
  }
`

export const Text = styled.span`
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  vertical-align: super;
`
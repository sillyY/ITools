import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  transition: border-color 1s;
  &:hover {
    & > input {
      border-top-color: #2169f6;
      border-bottom-color: #2169f6;
    }
    & > div {
      border-color: #2169f6;
      &:first-child {
        border-right-color: #cdd2da;
      }
      &:last-child {
        border-left-color: #cdd2da;
      }
    }
  }
  &.is-disabled {
    &:hover {
      & > div {
        cursor: not-allowed;
      }
    }
  }
`

export const Prefix = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f5f7fa;
  border: 1px solid #cdd2da;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 20px;
  line-height: 32px;
  color: #606266;
  cursor: pointer;
  outline: none;
`

export const Suffix = styled(Prefix)`
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const Input = styled.input`
  border: none;
  outline: none;
  border-top: 1px solid #cdd2da;
  border-bottom: 1px solid #cdd2da;
  width: 80px;
  padding: 0 12px;
  font-size: 14px;
  line-height: 14px;
  color: #606266;
  &:disabled {
    background-color: #f5f7fa;
    color: #c0c4cc;
    cursor: not-allowed;
  }
`

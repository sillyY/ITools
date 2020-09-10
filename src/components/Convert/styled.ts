import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  text-align: center;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s;
  &:hover {
    border-color: #2169f6;
  }
`

export const ConvertBox = styled.div`
  padding: 16px 0;
`

export const Input = styled.input`
  display: none;
  cursor: pointer;
`

export const Icon = styled.div`
  margin-bottom: 20px;
  i {
    font-size: 48px;
    color: #a9b1bc;
  }
`

export const Text = styled.p`
  margin: 0 0 4px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
`

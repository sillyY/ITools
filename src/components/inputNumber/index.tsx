import React, { useState } from 'react'
import { Container, Prefix, Suffix, Input } from './styled'

interface Props {
  value: number
  max?: number | undefined
  min?: number | undefined
  disabled?: boolean
}

const InputNumber = ({ value, max, min, disabled }: Props) => {
  const [number, setNumber] = useState(value)

  const add = () => {
    if (disabled) return
    // +number 将字符串转数字
    let value = +number + 1

    if (max === void 0) {
      setNumber(value)
    } else {
      setNumber(value > max ? max : value)
    }
  }
  const reduce = () => {
    if (disabled) return
    let value = +number - 1
    if (min === void 0) {
      setNumber(value)
    } else {
      setNumber(value < min ? min : value)
    }
  }
  return (
    <Container className={disabled ? 'is-disabled' : ''}>
      <Prefix onClick={reduce}>
        <i className="iconfont iconreduce" />
      </Prefix>
      <Input
        type="text"
        disabled={disabled}
        value={number}
        onChange={(e: any) => setNumber(e.target.value)}
      />
      <Suffix onClick={add}>
        <i className="iconfont iconadd" />
      </Suffix>
    </Container>
  )
}

InputNumber.defaultProps = {
  disabled: false,
}

export default InputNumber

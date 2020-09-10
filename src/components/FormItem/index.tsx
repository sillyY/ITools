import React, { SFC } from 'react'
import { Container, LabelBox, Label, ControlBox } from './styled'
interface Props {
  inline?: boolean
  layout?: 'horizontal' | 'vertical'
  labelCol?: number
  wrapperCol?: number
  label: string
  name?: string
}

const FormItem: SFC<Props> = (props) => {
  const { inline, layout, labelCol, wrapperCol, label, children } = props
  return (
    <Container inline={inline}>
      <LabelBox className={layout === 'horizontal' ? `col-${labelCol}` : ''}>
        <Label>{label}</Label>
      </LabelBox>
      <ControlBox className={layout === 'horizontal' ? `col-${wrapperCol}` : ''}>
        {children}
      </ControlBox>
    </Container>
  )
}

FormItem.defaultProps = {
  inline: false,
  layout: 'horizontal',
  labelCol: 4,
  wrapperCol: 14,
}

export default FormItem

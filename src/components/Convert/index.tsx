import React, { useRef } from 'react'
import { Container, ConvertBox, Input, Icon, Text } from './styled'
import { convertPDF }from '../../IPCRender'

const Convert = () => {
  const input = useRef(null)
  const onConvertClick = () => {
    let el = (input as any).current
    el.click()
  }
  const onChange = (e: any) => {
    let files = e.target.files;
    convertPDF(Array.from(files))
  }

  return (
    <Container onClick={onConvertClick}>
      <ConvertBox>
        <Input
          ref={input}
          type="file"
          onClick={(e) => e.stopPropagation()}
          onChange={onChange}
        />
        <Icon>
          <i className="iconfont iconupload" />
        </Icon>
        <Text>我是Convert</Text>
      </ConvertBox>
    </Container>
  )
}

export default Convert

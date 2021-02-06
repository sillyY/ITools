import styled, { css } from 'styled-components'
import { Props } from './index'

export const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  margin-left: 15px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiPHPmDAM2YGxsjFWciYFEMKqBGMD4//9/rBJnz54dDSX6aQAIMABCtQiAsDRF+wAAAABJRU5ErkJggg==);
`

export const Container = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  transition: all 0.3s;
  border-width: ${(props: Props) =>
    props.borderWidth ? props.borderWidth : 'medium'};
  border-color: ${(props: Props) =>
    props.borderColor ? props.borderColor : ''};
`

import styled from 'styled-components'

const Flex: any = styled.div`
  display: flex;

  ${({ justifyContentSpaceBetween }: any) =>
    justifyContentSpaceBetween ? 'justify-content: space-between' : ''};
  ${({ center }: any) =>
    center ? 'justify-content: center; align-items: center' : ''};

  ${({ row }: any) => (row ? 'flex-direction: row;' : '')};

  ${({ flex1 }: any) => (flex1 ? 'flex: 1;' : '')};
  ${({ column }: any) => (column ? 'flex-direction: column;' : '')};

  ${({ mr }: any) => (mr ? `margin-right: ${mr}px` : '')};
  ${({ mt }: any) => (mt ? `margin-top: ${mt}px` : '')};
`

export default Flex

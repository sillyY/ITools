import React, { SFC, useEffect } from 'react'
import { Group } from './styled'
interface Props {
  value?: any
  onChange?: (e: any) => void
}

export const RadioGroupContext: any = React.createContext(null)

const RadioGroup: SFC<Props> = ({ value, children, onChange }) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      <Group>{children}</Group>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup

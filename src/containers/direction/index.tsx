import React, { useEffect } from 'react'
import { Container, Placeholder, Square, Label, Input } from './styled'

interface Props {
  direction: string
  onDirectionChanged: (e: any) => void
}

const Direction = ({ direction, onDirectionChanged }: Props) => {
  const unregisterAcitve = () => {
    let direction = document.querySelector('#direction')
    let labels = direction?.querySelectorAll('label')
    labels?.forEach(
      (item) => (item.className = item.className.replace('active', ''))
    )
  }

  const onRadioClick = (e: any) => {
    unregisterAcitve()
    e.target.parentNode.className += ' active'
    onDirectionChanged(e)
  }

  useEffect(() => {
    let directionNode = document.querySelector('#direction')
    let event: HTMLElement | null = directionNode!.querySelector(
      `#${direction}`
    )
    if (event) {
      event.click()
    }
  }, [direction])
  return (
    <Container id="direction">
      <Placeholder />
      <Square className="rotate">
        <Label htmlFor="top">
          <Input
            id="top"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
        <Label htmlFor="right">
          <Input
            id="right"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
        <Label htmlFor="left">
          <Input
            id="left"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
        <Label htmlFor="bottom">
          <Input
            id="bottom"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
      </Square>
      <Square>
        <Label htmlFor="topLeft">
          <Input
            id="topLeft"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
        <Label htmlFor="topRight">
          <Input
            id="topRight"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
        <Label htmlFor="bottomLeft">
          <Input
            id="bottomLeft"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
        <Label htmlFor="bottomRight">
          <Input
            id="bottomRight"
            type="radio"
            name="direction"
            onClick={onRadioClick}
          />
        </Label>
      </Square>
    </Container>
  )
}

export default Direction

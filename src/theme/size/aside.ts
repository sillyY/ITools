import theme from 'styled-theming'

export const asideWidth = theme.variants('size', 'kind', {
  default: { normal: '240px', compact: '200px', loose: '320px' },
})

export const asidePaddingTop = theme.variants('size', 'kind', {
  default: { normal: '48px', compact: '36px', loose: '60px' },
})

export const asidePaddingBotoom = theme.variants('size', 'kind', {
  default: { normal: '48px', compact: '36px', loose: '60px' },
})

export const asidePaddingLeft = theme.variants('size', 'kind', {
  default: { normal: '24px', compact: '18px', loose: '30px' },
})

export const asidePaddingRight = theme.variants('size', 'kind', {
  default: { normal: '24px', compact: '18px', loose: '30px' },
})

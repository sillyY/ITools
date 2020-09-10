import theme from 'styled-theming'

export const asideBackgroundColor = theme.variants('mode', 'kind', {
  default: { light: 'white', dark: '#11101d', blue: '#2f49d0' },
})

export const menuItemColor = theme.variants('mode', 'kind', {
  default: { light: '#7c8b97', dark: 'white', blue: '#c5cbe6' },
})

export const menuItemActiveColor = theme.variants('mode', 'kind', {
  default: { light: 'white', dark: '#11101d', blue: '#f3f3f3' },
})
export const menuItemAcitveBackgroundColor = theme.variants('mode', 'kind', {
  default: { light: '#2169f6', dark: 'white', blue: '#1a2b81' },
})

export const searchColor = theme.variants('mode', 'kind', {
  default: { light: 'white', dark: '#b8b7bb', blue: '#c5cbe6' },
})

export const searchBackgrounColor = theme.variants('mode', 'kind', {
  default: { light: '#a9b1bc', dark: '#41404a', blue: '#576bd7' },
})

export const FooterColor = theme.variants('mode', 'kind', {
  default: { light: '#7c8b97', dark: 'white', blue: '#c5cbe6' },
})

export const collapseBackgroundColor = theme.variants('mode', 'kind', {
  default: { light: '#a9b1bc', dark: '#41404a', blue: '#1a2b81' },
})

import theme from 'styled-theming'

export const emptyColor = theme.variants('mode', 'kind', {
  default: { light: '#7c8b97', dark: 'white', blue: '#c5cbe6' },
})


import theme from 'styled-theming'

export const mainBackgroundColor = theme.variants('mode', 'kind', {
  default: { light: '#f2f4ff', dark: '#181c27', blue: '#576bd7' },
})
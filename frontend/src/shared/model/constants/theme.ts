import themeStyles from '@/shared/model/styles/theme.module.css'

export type FontColors = keyof typeof fontColors
export type IconColors = keyof typeof iconColors
export type FontSizes = keyof typeof fontSizes
export type FontWeights = keyof typeof fontWeights
export type NavigationTitles = keyof typeof navigationTitle

const fontColors = {
  white: `${themeStyles.white}`,
  whiteLight: `${themeStyles.whiteLight}`,
  grey: `${themeStyles.grey}`,
  greyLight: `${themeStyles.greyLight}`,
  orange: `${themeStyles.orange}`,
  brown: `${themeStyles.brown}`,
  brownDark: `${themeStyles.brownDark}`,
  black: `${themeStyles.black}`,
}

const iconColors = {
  white: 'rgba(255, 255, 255, 1)',
  whiteLight: 'rgba(255, 249, 239, 1)',
  grey: 'rgba(162, 162, 162, 1)',
  greyLight: 'rgba(189, 181, 176, 1)',
  orange: 'rgba(255, 153, 0, 1)',
  brown: 'rgba(68, 29, 6, 1)',
  brownDark: 'rgba(43, 16, 1, 1)',
  black: 'rgba(0, 0, 0, 1)',
}

export const fontSizes = {
  xSmall: themeStyles.xSmall, // 16px
  small: themeStyles.small, // 18px
  xMedium: themeStyles.xMedium, // 24px
  large: themeStyles.large, // 64px
  xLarge: themeStyles.xLarge, // 72px
}

export const navigationTitle = {
  infrastructura: 'Инфраструктура',
  contacts: 'Контакты',
  documents: 'Документы',
  aboutProject: 'О проекте',
  history: 'Ход строительства',
}

const fontWeights = {
  light: themeStyles.light,
  regular: themeStyles.regular,
  medium: themeStyles.medium,
  semiBold: themeStyles.semiBold,
  bold: themeStyles.bold,
}

export const theme = {
  icon: {
    colors: iconColors,
  },
  font: {
    size: fontSizes,
    weight: fontWeights,
    colors: fontColors,
  },
}

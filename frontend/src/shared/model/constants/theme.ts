import themeStyles from '@/shared/model/styles/theme.module.css'

export type FontColors = keyof typeof fontColors
export type IconColors = keyof typeof iconColors
export type FontSizes = keyof typeof fontSizes
export type FontWeights = keyof typeof fontWeights
export type NavigationTitles = keyof typeof navigationTitle

const opacityAndMoveX = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const opacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const fontColors = {
  white: `${themeStyles.white}`,
  // whiteLight: `${themeStyles.whiteLight}`,
  grey: `${themeStyles.grey}`,
  greyDark: `${themeStyles.greyDark}`,
  // greyLight: `${themeStyles.greyLight}`,
  orange: `${themeStyles.orange}`,
  // brown: `${themeStyles.brown}`,
  // brownDark: `${themeStyles.brownDark}`,
  blueLight: `${themeStyles.blueLight}`,
  black: `${themeStyles.black}`,
}

const iconColors = {
  white: 'rgba(255, 255, 255, 1)',
  // whiteLight: 'rgba(255, 249, 239, 1)',
  grey: 'rgba(162, 162, 162, 1)',
  greyDark: 'rgba(39, 46, 68, 1)',
  // greyLight: 'rgba(189, 181, 176, 1)',
  orange: 'rgba(255, 77, 0, 1)',
  // brown: 'rgba(68, 29, 6, 1)',
  // brownDark: 'rgba(43, 16, 1, 1)',
  black: 'rgba(0, 0, 0, 1)',
}

export const fontSizes = {
  small: themeStyles.small,
  xSmall: themeStyles.xSmall,
  sMedium: themeStyles.sMedium,
  xMedium: themeStyles.xMedium,
  sLarge: themeStyles.sLarge,
  large: themeStyles.large,
  xLarge: themeStyles.xLarge,
}

export const navigationTitle = {
  infrastructura: 'Инфраструктура',
  contacts: 'Контакты',
  documents: 'Документы',
  apartments: 'Квартиры',
  apartment: 'Квартира',
  rules: 'Условия продажи',
  aboutProject: 'О проекте',
  history: 'Ход строительства',
  aboutBuilder: 'О застройщике',
}

const fontWeights = {
  light: themeStyles.light,
  regular: themeStyles.regular,
  medium: themeStyles.medium,
  semiBold: themeStyles.semiBold,
  bold: themeStyles.bold,
}

const animations = {
  opacity: opacity,
  opacityAndMoveX: opacityAndMoveX,
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
  animations: animations,
}

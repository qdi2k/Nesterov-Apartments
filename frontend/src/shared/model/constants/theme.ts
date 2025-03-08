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
  grey: `${themeStyles.grey}`,
  greyDark: `${themeStyles.greyDark}`,
  greyLight: `${themeStyles.greyLight}`,
  orange: `${themeStyles.orange}`,
  blueLight: `${themeStyles.blueLight}`,
  black: `${themeStyles.black}`,
}

const iconColors = {
  white: 'rgba(255, 255, 255, 1)',
  grey: 'rgba(162, 162, 162, 1)',
  greyDark: 'rgba(39, 46, 68, 1)',
  greyLight: 'rgba(238, 241, 246, 1)',
  orange: 'rgba(255, 77, 0, 1)',
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
  contacts: 'Контакты',
  documents: 'Документы',
  apartments: 'Квартиры',
  apartment: 'Квартира',
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

import themeStyles from '@/shared/styles/theme.module.css'

declare const AvailableWeights: ['regular', 'medium', 'semiBold', 'bold']
declare const AvailableSizes: ['xSmall', 'small', 'medium']

export type Weights = typeof AvailableWeights[number] | undefined
export type Sizes = typeof AvailableSizes[number] | undefined

export const getFontWeight = (type: Weights) => {
  switch (type) {
    case 'medium':
      return themeStyles.medium
    case 'semiBold': 
      return themeStyles.semiBold
      case 'bold': 
      return themeStyles.bold
    default:
      return themeStyles.regular
  }
}

export const getFontSize = (type: Sizes) => {
  switch (type) {
    case 'small':
      return themeStyles.small
    case 'medium': 
      return themeStyles.medium
    default:
      return themeStyles.xSmall
  }
}
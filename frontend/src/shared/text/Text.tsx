import {ReactNode} from 'react'
import {Open_Sans} from "next/font/google"
import themeStyles from '@/shared/theme.module.css'

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
})

declare const AvailableColors: ['white', 'brown', 'black']
declare const AvailableSizes: ['xSmall', 'small', 'medium']
declare const AvailableWeights: ['regular', 'medium', 'semiBold', 'bold']

export type Colors = typeof AvailableColors[number] | undefined
export type Sizes = typeof AvailableSizes[number] | undefined
export type Weights = typeof AvailableWeights[number] | undefined

interface ITextProps {
  children: ReactNode
  style?: string
  size?: Sizes
  weight?: Weights
  color?: Colors
}

export default function Text({children, style, size, weight, color}: ITextProps) {
  const getTexColor = (type: Colors) => {
    switch (type) {
      case 'white':
        return themeStyles.white
      case 'brown': 
        return themeStyles.brown
      default:
        return themeStyles.black
    }
  }
  const getFontWeight = (type: Weights) => {
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
  const getFontSize = (type: Sizes) => {
    switch (type) {
      case 'small':
        return themeStyles.small
      case 'medium': 
        return themeStyles.medium
      default:
        return themeStyles.xSmall
    }
  }

  return (
    <p className={`${openSans.className} ${getFontSize(size)} ${getFontWeight(weight)} ${getTexColor(color)} ${style}`}>
      {children}
    </p>
  )
}

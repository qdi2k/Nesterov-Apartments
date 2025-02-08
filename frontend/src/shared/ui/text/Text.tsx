import {ReactNode} from 'react'
import {Open_Sans} from 'next/font/google'
import {
  theme,
  type FontSizes,
  type FontWeights,
  type FontColors,
} from '@/shared/model'
import themeStyles from '@/shared/model/styles/theme.module.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

interface ITextProps {
  children: ReactNode
  className?: string
  size?: FontSizes
  weight?: FontWeights
  color?: FontColors
  isUppercase?: boolean
  isHover?: boolean
}

export function Text({
  children,
  className,
  size = 'sSmall',
  weight = 'regular',
  color = 'black',
  isUppercase,
  isHover,
}: ITextProps) {
  return (
    <p
      className={`
        ${openSans.className}
        ${isHover && themeStyles.textHover}
        ${isUppercase && themeStyles.uppercase}
        ${theme.font.size?.[size]}
        ${theme.font.weight?.[weight]}
        ${theme.font.colors?.[color]}
        ${className}
      `}
    >
      {children}
    </p>
  )
}

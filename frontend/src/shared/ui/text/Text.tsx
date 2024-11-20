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
  weight: ['400', '500', '600', '700'],
})

interface ITextProps {
  children: ReactNode
  className?: string
  size?: FontSizes
  weight?: FontWeights
  color?: FontColors
  isHover?: boolean
}

export function Text({
  children,
  className,
  size = 'xSmall',
  weight = 'regular',
  color = 'black',
  isHover,
}: ITextProps) {
  return (
    <p
      className={`
        ${openSans.className}
        ${isHover && themeStyles.textHover}
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

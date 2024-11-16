import {ReactNode} from 'react'
import {Open_Sans} from "next/font/google"
import {type Colors,  getColor} from '@/shared/constants/colors'
import {
  type Weights,
  type Sizes,
  getFontWeight,
  getFontSize
} from '@/shared/constants/fonts'

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
})

interface ITextProps {
  children: ReactNode
  className?: string
  size?: Sizes
  weight?: Weights
  color?: Colors
}

export default function Text({children, className, size, weight, color}: ITextProps) {
  return (
    <p className={`
      ${openSans.className}
      ${getFontSize(size)}
      ${getFontWeight(weight)}
      ${className}
    `}
      style={{color: getColor(color)}}
    >
      {children}
    </p>
  )
}

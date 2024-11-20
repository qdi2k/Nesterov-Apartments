import {ReactNode} from 'react'
import localFont from 'next/font/local'
import {theme} from '@/shared/model'

const helio = localFont({
  src: './../../assets/fonts/heliosextthin.otf',
  weight: '400',
})

interface IMainTitleProps {
  children: ReactNode
  className?: string
}

export function MainTitle({children, className}: IMainTitleProps) {
  console.log(theme.font.size.xLarge)
  return (
    <h1
      className={`
        ${helio.className}
        ${theme.font.size.xLarge}
        ${theme.font.weight.regular}
        ${theme.font.colors.brown}
        ${className}
      `}
    >
      {children}
    </h1>
  )
}

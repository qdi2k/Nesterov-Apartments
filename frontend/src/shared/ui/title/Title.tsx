import {ReactNode} from 'react'
import localFont from 'next/font/local'
import {theme} from '@/shared/model'

const helio = localFont({
  src: './../../assets/fonts/heliosextthin.otf',
  weight: '400',
})

interface ITitleProps {
  children: ReactNode
}

export function Title({children}: ITitleProps) {
  return (
    <h2
      className={`
        ${helio.className}
        ${theme.font.size.xLarge}
        ${theme.font.weight.regular}
        ${theme.font.colors.brown}
      `}
    >
      {children}
    </h2>
  )
}

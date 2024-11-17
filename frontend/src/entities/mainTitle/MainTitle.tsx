import {ReactNode} from 'react'
import localFont from "next/font/local"
import themeStyles from '@/shared/styles/theme.module.css'

const helio = localFont({
  src: "./../../shared/assets/fonts/heliosextthin.otf",
  weight: "400",
})

interface IMainTitleProps {
  children: ReactNode
  className?: string
}

export default function MainTitle({children, className}: IMainTitleProps) {
  return (
    <h1 className={`
      ${helio.className}
      ${themeStyles.xLarge}
      ${themeStyles.regular}
      ${themeStyles.brown}
      ${className}
    `}>
      {children}
    </h1>
  )
}

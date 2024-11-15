import {ReactNode} from 'react'
import localFont from "next/font/local"
import themeStyles from '@/shared/theme.module.css'

const geistMono = localFont({
  src: "./../heliosextthin.otf",
  variable: "--font-geist-mono",
  weight: "400",
})

interface IMainTitleProps {
  children: ReactNode
}

export default function MainTitle({children}: IMainTitleProps) {
  return (
    <h1 className={`${geistMono.className} ${themeStyles.xLarge} ${themeStyles.regular} ${themeStyles.white}`}>
      {children}
    </h1>
  );
}

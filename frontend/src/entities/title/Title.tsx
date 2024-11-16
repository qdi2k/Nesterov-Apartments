import {ReactNode} from 'react'
import localFont from "next/font/local"
import themeStyles from '@/shared/styles/theme.module.css'

const helio = localFont({
  src: "./../../heliosextthin.otf",
  variable: "--font-geist-mono",
  weight: "400",
})

interface ITitleProps {
  children: ReactNode
}

export default function Title({children}: ITitleProps) {
  return (
    <h2 className={`${helio.className} ${themeStyles.large} ${themeStyles.regular} ${themeStyles.white}`}>
      {children}
    </h2>
  );
}

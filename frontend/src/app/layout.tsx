'use client'

// import type {Metadata} from "next"
import '@/shared/styles/globals.css'
import Footer from "@/widgets/footer/Footer"
import Header from "@/widgets/header/Header"
import Burger from "@/widgets/burger/Burger"
import { useState } from "react"

// export const metadata: Metadata = {
//   title: "Nesterov-appartments",
//   description: "Main page",
// }

export default function RootLayout(
  {children}: Readonly<{children: React.ReactNode}>
){
  const [isOpenBurger, setIsOpenBurger] = useState(false)

  const openBurger = () => {
    document.body.style.overflow = 'hidden'
    setIsOpenBurger(true)
  }
  const closeBurger = () => {
    document.body.style.overflow = 'visible'
    setIsOpenBurger(false)
  }
  return (
    <html lang="en">
      <body>
        <Burger isOpen={isOpenBurger} onPress={closeBurger}/>
        <Header openBurger={openBurger} />
        {children}
        <Footer/>
      </body>
    </html>
  )
}

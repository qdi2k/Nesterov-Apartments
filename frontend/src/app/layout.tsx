'use client'

// import type {Metadata} from "next"
import './globals.css'
import {Footer} from '@/widgets/footer'
import {Header} from '@/widgets/header/Header'
import {Burger} from '@/widgets/burger/ui/Burger'
import {useState} from 'react'

// export const metadata: Metadata = {
//   title: "Nesterov-appartments",
//   description: "Main page",
// }

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const [isOpenBurger, setIsOpenBurger] = useState(false)

  const openBurger = () => {
    // document.body.style.overflow = 'hidden'
    setIsOpenBurger(true)
  }
  const closeBurger = () => {
    // document.body.style.overflow = 'visible'
    setIsOpenBurger(false)
  }

  return (
    <html lang='en'>
      <body>
        <Burger isOpen={isOpenBurger} onPress={closeBurger} />
        <Header openBurger={openBurger} />
        {children}
        <Footer />
      </body>
    </html>
  )
}

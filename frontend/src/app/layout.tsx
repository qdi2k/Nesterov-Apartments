import type {Metadata} from "next"
import '@/shared/styles/globals.css'
import Footer from "@/widgets/footer/Footer"
import Header from "@/widgets/header/Header"

export const metadata: Metadata = {
  title: "Nesterov-appartments",
  description: "Main page",
}

export default function RootLayout(
  {children}: Readonly<{children: React.ReactNode}>
){
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

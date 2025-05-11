'use client'

// import type {Metadata} from "next"
import './globals.css'
import {Footer} from '@/widgets/footer'
import {Header} from '@/widgets/header/Header'
import {Burger} from '@/widgets/burger/ui/Burger'
import {useState} from 'react'

// export const metadata: Metadata = {
//   metadataBase: new URL('https://nesterov-apartments.ru'),
//   title: 'Жилая недвижимость - купить квартиру в новострайках от застройщика Нестеров',
//   description: 'Официальный сайт застройщика Нестеров. Квартиры в новостройках Москвы от 5,9 млн ₽. Рассрочка 0%. Скидки до 15%.',
//   keywords: [
//     'Купить квартиру','Nesterov Apartments','Nesterov','Квартиры в Нижнем Новгороде', 
//     'Квартиры в Краснодаре','Новостройки Москва','Застройщик Нестеров','Квартиры от застройщика',
//     'Жилая недвижимость','Купить квартиру в новостройке','ЖК от застройщика','Квартиры в Москве',
//     'Недвижимость в новостройках','Строительство жилых комплексов','Квартиры с отделкой','Рассрочка на новостройки',
//     'Ипотека на новостройки','Выбор квартиры в новостройке','Доступное жилье в Москве','Премиум квартиры от застройщика',
//     'Скидки на новостройки','Рейтинг застройщиков Москвы','Сроки сдачи новостроек','Отзывы о застройщике Нестеров',
//     'Инвестиции в недвижимость','Квартиры в строящихся домах','Выгодные предложения по новостройкам'
//   ],
//   authors: [{ name: 'Nesterov Team' }],  
//   openGraph: {
//     title: 'Жилая недвижимость - купить квартиру в новостройках от застройщика Нестеров',
//     description: 'Квартиры в новостройках с отделкой. Рассрочка 0%. Скидки до 15%',
//     url: 'https://nesterov-apartments.ru',
//     siteName: 'Nesterov Apartment',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Новостройки от застройщика Нестеров',
//       },
//     ],
//     locale: 'ru_RU',
//     type: 'website',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-image-preview': 'large',
//       'max-video-preview': -1,
//     },
//   },
//   icons: {
//     icon: [
//       { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//       { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//     ],
//     other: [
//       {
//         rel: 'mask-icon',
//         url: '/favicon/safari-pinned-tab.svg',
//         color: '#5bbad5',
//       },
//     ],
//   },
//   manifest: '/favicon/site.webmanifest',
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
    <html lang='ru'>
      <body>
        <Burger isOpen={isOpenBurger} onPress={closeBurger} />
        <Header openBurger={openBurger} />
        {children}
        <Footer />
      </body>
    </html>
  )
}

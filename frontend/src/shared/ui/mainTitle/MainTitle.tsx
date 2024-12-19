'use client'

import {ReactNode} from 'react'
import localFont from 'next/font/local'
import styles from './MainTitle.module.css'
import {theme} from '@/shared/model'
import {Text} from '@/shared/ui'
import {navigationTitle, NavigationTitles} from '@/shared/model/constants/theme'
import {usePathname} from 'next/navigation'
import Link from 'next/link'

const helio = localFont({
  src: './../../assets/fonts/heliosextthin.otf',
  weight: '400',
})

interface IMainTitleProps {
  children: ReactNode
  className?: string
}

export function MainTitle({children, className}: IMainTitleProps) {
  const router = usePathname()
  const currentLink = router?.replace('/', '') as NavigationTitles
  return (
    <>
      <h1
        className={`
        ${helio.className}
        ${styles.mainTitle}
        ${theme.font.size.xLarge}
        ${theme.font.weight.regular}
        ${theme.font.colors.brown}
        ${className}
      `}
      >
        {children}
      </h1>
      {currentLink && (
        <div className={styles.navigationContainer}>
          <Link href='/'>
            <Text weight='light'>Главная</Text>
          </Link>
          <Text weight='light'>&nbsp;-&nbsp;</Text>
          <Text weight='light'>{navigationTitle?.[currentLink]}</Text>
        </div>
      )}
    </>
  )
}

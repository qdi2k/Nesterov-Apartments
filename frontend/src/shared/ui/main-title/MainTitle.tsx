'use client'

import {ReactNode} from 'react'
import {Open_Sans} from 'next/font/google'
import styles from './MainTitle.module.css'
import {theme} from '@/shared/model'
import {Text} from '@/shared/ui'
import {navigationTitle, NavigationTitles} from '@/shared/model/constants/theme'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {motion, type Variants} from 'framer-motion'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

interface IMainTitleProps {
  children?: ReactNode
  className?: string
  animation?: Variants
}

// Исправить для многоуровневости

export function MainTitle({children, className, animation}: IMainTitleProps) {
  const router = usePathname() ?? ''

  const getCurrentLink = () => {
    const link = router.replace('/', '')

    if (link.includes('-')) {
      const firstLinkHalf = link.split('-')[0]
      const secondLinkHalf = link.slice(link.indexOf('-') + 1)
      const currentSecondLinkHalf =
        secondLinkHalf.charAt(0).toUpperCase() + secondLinkHalf.slice(1)

      return firstLinkHalf + currentSecondLinkHalf
    }
    return link
  }

  const getAttachedLink = () => {
    if (getCurrentLink().includes('/')) {
      const firstLinkHalf = getCurrentLink().split('/')[0]
      const secondLinkHalf = getCurrentLink().split('/')[1]
      return {firstLinkHalf, secondLinkHalf}
    }
    return
  }

  return (
    <div>
      <motion.h1
        className={`
        ${openSans.className}
        ${theme.font.size.xLarge}
        ${theme.font.weight.bold}
        ${theme.font.colors.white}
        ${className}
      `}
        variants={animation}
      >
        {children}
      </motion.h1>
      {getCurrentLink() && (
        <div className={styles.navigationContainer}>
          <Link href='/'>
            <Text weight='light'>Главная</Text>
          </Link>
          <Text weight='light'>&nbsp;-&nbsp;</Text>
          {getCurrentLink().includes('/') ? (
            <>
              <Link href={`/${getAttachedLink()?.firstLinkHalf}`}>
                <Text weight='light'>
                  {
                    navigationTitle?.[
                      getAttachedLink()?.firstLinkHalf as NavigationTitles
                    ]
                  }
                </Text>
              </Link>
              <Text weight='light'>&nbsp;-&nbsp;</Text>
              <Text weight='light'>
                {
                  navigationTitle?.[
                    getAttachedLink()?.secondLinkHalf as NavigationTitles
                  ]
                }
              </Text>
            </>
          ) : (
            <Text weight='bold'>
              {navigationTitle?.[getCurrentLink() as NavigationTitles]}
            </Text>
          )}
        </div>
      )}
    </div>
  )
}

'use client'

import {ContactButton} from '@/entities/contactButton'
import {BurgerButton, Icon, Text} from '@/shared/ui'
import Link from 'next/link'
import styles from './Header.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {usePathname} from 'next/navigation'

interface IHeaderProps {
  openBurger: () => void
}

export function Header({openBurger}: IHeaderProps) {
  const router = usePathname()
  return (
    <header
      className={`${styles.header} ${router !== '/' && styles.headerMargin}`}
    >
      <div className={`${themeStyles.container} ${styles.headerContainer}`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link href='/'>
              <Icon className={styles.logo} name='logoMain' size={368} />
            </Link>
          </div>
          <button className={styles.city}>
            <Icon name='address' size={27} color='brown' />
            <Text>Новосибирск</Text>
          </button>
        </div>
        <div className={styles.right}>
          <ContactButton color='brown' phoneColor='black' />
          <BurgerButton onPress={openBurger} />
        </div>
      </div>
    </header>
  )
}

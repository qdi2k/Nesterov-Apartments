'use client'

import {ContactButton} from '@/entities/contactButton'
import {BurgerButton, DropdownMenu, Icon} from '@/shared/ui'
import Link from 'next/link'
import styles from './Header.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

interface IHeaderProps {
  openBurger: () => void
}

const mockData = [
  {id: 1, city: 'Новосибирск'},
  {id: 2, city: 'Нижний Новгород'},
  {id: 3, city: 'Краснодар'},
]

export function Header({openBurger}: IHeaderProps) {
  const [city, setCity] = useState(mockData[0].city)
  const router = usePathname()
  return (
    <header
      className={`${styles.header} ${router !== '/' && styles.headerMargin}`}
    >
      <div className={`${themeStyles.container} ${styles.headerContainer}`}>
        <div className={styles.left}>
          <Link href='/'>
            <Icon className={styles.logo} name='logoMain' />
          </Link>
          <DropdownMenu
            title={city}
            changeTitle={setCity}
            icon='address'
            data={mockData}
            className={styles.dropdown}
          />
        </div>
        <div className={styles.right}>
          <ContactButton
            className={styles.contactButton}
            color='brown'
            phoneColor='black'
          />
          <BurgerButton onPress={openBurger} />
        </div>
      </div>
    </header>
  )
}

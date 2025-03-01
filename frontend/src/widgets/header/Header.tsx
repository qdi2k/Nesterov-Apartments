'use client'

import {BurgerButton, DropdownMenu, Icon, Text} from '@/shared/ui'
import styles from './Header.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import Link from 'next/link'

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
          <Link href='/' className={styles.logoLink}>
            <Icon className={styles.logo} color='white' name='logoNew' />
          </Link>
          <ul className={styles.navList}>
            <li className={styles.navText}>
              <Link href='/apartments2'>
                <Text size='small' color='white' isHover>
                  Квартиры
                </Text>
              </Link>
            </li>
            <li className={styles.navText}>
              <Link href='/documents'>
                <Text size='small' color='white' isHover>
                  Документы
                </Text>
              </Link>
            </li>
            <li className={styles.navText}>
              <Text size='small' color='white' isHover>
                Контакты
              </Text>
            </li>
            <li className={styles.navText}>
              <Text size='small' color='white' isHover>
                Условия продажи
              </Text>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <DropdownMenu
            title={city}
            changeTitle={setCity}
            icon='address'
            data={mockData}
            className={styles.dropdown}
          />
          <div className={styles.rightMenu}>
            <Text size='small' color='white' className={styles.phone}>
              +7 (495) 419-15-18
            </Text>
            <BurgerButton onPress={openBurger} />
          </div>
        </div>
      </div>
    </header>
  )
}

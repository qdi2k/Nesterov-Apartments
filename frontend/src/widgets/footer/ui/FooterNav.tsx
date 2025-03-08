import {Text} from '@/shared/ui'
import Link from 'next/link'
import styles from './Footer.module.css'

export function FooterNav() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/apartments2'>
          <Text size='small' color='white'>
            Квартиры
          </Text>
        </Link>
        <Link href='/documents'>
          <Text size='small' color='white'>
            Документы
          </Text>
        </Link>
      </nav>
      <nav className={styles.nav}>
        <Link href='/rules'>
          <Text size='small' color='white'>
            Условия продаж
          </Text>
        </Link>
        <Link href='/contacts'>
          <Text size='small' color='white'>
            Контакты
          </Text>
        </Link>
        <Link href='/about-builder'>
          <Text size='small' color='white'>
            О застройщике
          </Text>
        </Link>
      </nav>
    </>
  )
}

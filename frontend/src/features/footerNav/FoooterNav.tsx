import styles from './FooterNav.module.css'
import Text from '@/entities/text/Text'
import Link from 'next/link'

export default function FooterNav() {
  return (
    <div className={styles.footerNav}>
      <nav className={styles.nav}>
        <Link href='/about-project'>
          <Text size='small' color='greyLight'>О проекте</Text>
        </Link>
        <Link href='/infrastructura'>
          <Text size='small' color='greyLight'>Инфраструктура</Text>
        </Link>
        <Link href='/apartments'>
          <Text size='small' color='greyLight'>Квартиры</Text>
        </Link>
        <Link href='/documents'>
          <Text size='small' color='greyLight'>Документы</Text>
        </Link>
      </nav>
      <nav className={styles.nav}>
        <Link href='/rules'>
          <Text size='small' color='greyLight'>Условия продаж</Text>
        </Link>
        <Link href='/history'>
          <Text size='small' color='greyLight'>Ход строительства</Text>
        </Link>
        <Link href='/contacts'>
          <Text size='small' color='greyLight'>Контакты</Text>
        </Link>
        <Link href='/about-builder'>
          <Text size='small' color='greyLight'>О застройщике</Text>
        </Link>
      </nav>
    </div>
  )
}

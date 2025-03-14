import {Text} from '@/shared/ui'
import Link from 'next/link'
import styles from './Footer.module.css'

export function FooterNav() {
  return (
    <div className={styles.footerNav}>
      <nav className={styles.nav}>
        <Text
          color='white'
          size='xSmall'
          weight='semiBold'
          className={styles.navTitle}
        >
          Объекты
        </Text>
        <Text size='small' color='white'>
          Shagal
        </Text>
        <Text size='small' color='white'>
          Mariinn
        </Text>
        <Text size='small' color='white'>
          Rauta
        </Text>
        <Text size='small' color='white'>
          Voxhall
        </Text>
      </nav>
      <nav className={styles.nav}>
        <Link href='/payments'>
          <Text
            color='white'
            size='xSmall'
            weight='semiBold'
            className={styles.navTitle}
          >
            Способы оплаты
          </Text>
        </Link>
        <Text size='small' color='white'>
          Полная оплата
        </Text>
        <Text size='small' color='white'>
          Материнский капитал
        </Text>
        <Text size='small' color='white'>
          Ипотека
        </Text>
        <Text size='small' color='white'>
          Рассрочка
        </Text>
      </nav>
      <nav className={styles.nav}>
        <Link href='/events'>
          <Text
            color='white'
            size='xSmall'
            weight='semiBold'
            className={styles.navTitle}
          >
            Акции
          </Text>
        </Link>
        <Text size='small' color='white'>
          Ипотека без первого взноса
        </Text>
        <Text size='small' color='white'>
          Кладовая в рассрочку
        </Text>
        <Text size='small' color='white'>
          Ипотека траншами
        </Text>
        <Text size='small' color='white'>
          IT Ипотека от 4,7%
        </Text>
        <Text size='small' color='white'>
          Семейная ипотека от 2,99%
        </Text>
      </nav>
      <nav className={styles.nav}>
        <Text
          color='white'
          size='xSmall'
          weight='semiBold'
          className={styles.navTitle}
        >
          О компании
        </Text>
        <Link href='/rules'>
          <Text size='small' color='white'>
            Объекты
          </Text>
        </Link>
        <Link href='/contacts'>
          <Text size='small' color='white'>
            Квартиры
          </Text>
        </Link>
        <Link href='/about-builder'>
          <Text size='small' color='white'>
            Контакты
          </Text>
        </Link>
        <Link href='/about-builder'>
          <Text size='small' color='white'>
            Новости
          </Text>
        </Link>
        <Link href='/about-builder'>
          <Text size='small' color='white'>
            Документы
          </Text>
        </Link>
      </nav>
    </div>
  )
}

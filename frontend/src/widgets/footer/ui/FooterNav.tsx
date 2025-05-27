import {Text} from '@/shared/ui'
import Link from 'next/link'
import styles from './Footer.module.css'

const MOCK_OBJECTS = [
  {id: 1, object: 'Shagal', href: '/objects/object'},
  {id: 2, object: 'Mariinn', href: '/objects/object'},
  {id: 3, object: 'Rauta', href: '/objects/object'},
  {id: 4, object: 'Voxhall', href: '/objects/object'},
]

const MOCK_PAYMENTS = [
  {id: 1, payment: 'Полная оплата', href: '/payments/payment'},
  {id: 2, payment: 'Материнский капитал', href: '/payments/payment'},
  {id: 3, payment: 'Ипотека', href: '/payments/payment'},
  {id: 4, payment: 'Рассрочка', href: '/payments/payment'},
]

const MOCK_EVENTS = [
  {id: 1, event: 'Ипотека без первого взноса', href: '/events/event'},
  {id: 2, event: 'Кладовая в рассрочку', href: '/events/event'},
  {id: 3, event: 'Ипотека траншами', href: '/events/event'},
  {id: 4, event: 'IT Ипотека от 4,7%', href: '/events/event'},
  {id: 5, event: 'Семейная ипотека от 2,99%', href: '/events/event'},
]

const MOCK_SCREENS = [
  {id: 1, screen: 'Объекты', href: '/objects/object'},
  {id: 2, screen: 'Квартиры', href: '/apartments'},
  {id: 3, screen: 'Способы оплаты', href: '/payments'},
  {id: 4, screen: 'Акции', href: '/events'},
  {id: 5, screen: 'Новости', href: '/news'},
  {id: 6, screen: 'Контакты', href: '/contacts'},
  {id: 7, screen: 'Документы', href: '/documents'},
]

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
        {MOCK_OBJECTS.map((object) => (
          <Link href={object.href} key={object.id}>
            <Text size='small' color='white' isHover>
              {object.object}
            </Text>
          </Link>
        ))}
      </nav>
      <nav className={styles.nav}>
        <Text
          color='white'
          size='xSmall'
          weight='semiBold'
          className={styles.navTitle}
        >
          Способы оплаты
        </Text>
        {MOCK_PAYMENTS.map((payment) => (
          <Link href={payment.href} key={payment.id}>
            <Text size='small' color='white' isHover>
              {payment.payment}
            </Text>
          </Link>
        ))}
      </nav>
      <nav className={styles.nav}>
        <Text
          color='white'
          size='xSmall'
          weight='semiBold'
          className={styles.navTitle}
        >
          Акции
        </Text>
        {MOCK_EVENTS.map((event) => (
          <Link href={event.href} key={event.id}>
            <Text size='small' color='white' isHover>
              {event.event}
            </Text>
          </Link>
        ))}
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
        {MOCK_SCREENS.map((screen) => (
          <Link href='/objects/object' key={screen.id}>
            <Text size='small' color='white' isHover>
              {screen.screen}
            </Text>
          </Link>
        ))}
      </nav>
    </div>
  )
}

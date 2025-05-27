import styles from './Footer.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {FooterNav} from './FooterNav'
import {Icon, Text} from '@/shared/ui'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={themeStyles.container}>
        <div className={`${styles.topContentContainer}`}>
          <div className={styles.logoContainer}>
            <Link href='/'>
              <Icon className={styles.logo} name='logo' color='white' />
            </Link>
          </div>
          <FooterNav />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={themeStyles.container}>
          <div className={styles.bottomContentContainer}>
            <div className={styles.links}>
              <div className={styles.contact}>
                <Text href='tel:+74954191518' color='white'>
                  +7 (495) 419-15-18
                </Text>
                <Text color='grey'>Контакт-центр в Москве</Text>
              </div>
              <ul className={styles.contactList}>
                <li className={styles.contactLink}>
                  <Icon name='vkontakte' size={22} color='white' />
                </li>
                <li className={styles.contactLink}>
                  <Icon name='instagram' size={22} color='white' />
                </li>
                <li
                  className={`${styles.contactLink} ${styles.contactLinkTelegram}`}
                >
                  <Icon name='telegram' size={22} color='white' />
                </li>
              </ul>
            </div>
            <Text color='grey' className={styles.info}>
              Информация, предоставленная на сайте, не является публичной
              офертой. Все цены действительны на 11.03.2025, при условии
              единовременной оплаты. Готовые объекты могут отличаться от
              представленных на визуализациях, возможны изменения в отделке с
              сохранением аналогичного уровня брендов и качества. Мебель,
              светильники и предметы интерьера не входят в пакет отделки.
            </Text>
            <div className={styles.document}>
              <Text color='white'>Обработка персональных данных</Text>
              <Text color='grey'>© 2025 «Nesterov». Все права защищены</Text>
              <Text color='white'>Пользовательское соглашение</Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

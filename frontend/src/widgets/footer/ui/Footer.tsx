import styles from './Footer.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {FooterNav} from './FooterNav'
import {Divider, Icon, Text} from '@/shared/ui'
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
        <Divider className={styles.footerDivider} />
        <div className={styles.bottomContentContainer}>
          <Text size='small' color='white'>
            © 2024 Все права защищены
          </Text>
          <ul className={styles.contactList}>
            <li className={styles.contactLink}>
              <Icon name='vkontakte' size={34} color='white' />
            </li>
            <li className={styles.contactLink}>
              <Icon name='instagram2' size={34} color='white' />
            </li>
            <li
              className={`${styles.contactLink} ${styles.contactLinkTelegram}`}
            >
              <Icon name='telegram' size={34} color='white' />
            </li>
          </ul>
          <Text size='small' color='white' className={styles.link}>
            Политика конфиденциальности
          </Text>
        </div>
      </div>
    </footer>
  )
}

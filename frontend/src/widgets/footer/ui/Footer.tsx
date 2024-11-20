import styles from './Footer.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {ContactButton} from '@/entities/contactButton/ContactButton'
import {FooterNav} from './FooterNav'
import {Icon} from '@/shared/ui/icon/Icon'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={`${themeStyles.brownDarkBackground} ${styles.footer}`}>
      <div className={`${themeStyles.container} ${styles.footerContainer}`}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <Icon
              className={styles.logo}
              name='logo'
              color='white'
              size={368}
            />
          </Link>
        </div>
        <FooterNav />
        <div className={styles.contact}>
          <ContactButton />
        </div>
      </div>
    </footer>
  )
}

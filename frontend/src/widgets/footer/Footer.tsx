import styles from './Footer.module.css'
import themeStyles from '@/shared/theme.module.css'
import ContactButton from '@/entities/contactButton/ContactButton'
import Icon from '@/shared/icon/Icon'
import Link from 'next/link'
import FooterNav from '@/entities/footerNav/FoooterNav'

export default function Footer() {
  return (
    <footer className={`${themeStyles.brownDarkBackground} ${styles.footer}`}>
      <div className={`${themeStyles.container} ${styles.footerContainer}`}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <Icon className={styles.logo} name='logo' size={368} />
          </Link>
        </div>
        <FooterNav/>
        <div className={styles.contact}>
          <ContactButton/> 
        </div>
      </div>
    </footer>
  )
}

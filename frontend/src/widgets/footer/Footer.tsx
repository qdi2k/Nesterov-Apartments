import styles from './Footer.module.css'
import themeStyles from '@/shared/styles/theme.module.css'
import ContactButton from '@/features/contactButton/ContactButton'
import FooterNav from '@/features/footerNav/FoooterNav'
import Icon from '@/entities/icon/Icon'
import Link from 'next/link'

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

import ContactButton from '@/features/contactButton/ContactButton'
import Icon from '@/entities/icon/Icon'
import Link from 'next/link'
import Text from '@/entities/text/Text'
import BurgerButton from '@/entities/burgerButton/BurgerButton'
import styles from './Header.module.css'
import themeStyles from '@/shared/styles/theme.module.css'

interface IHeaderProps {
  openBurger: () => void
}

export default function Header({openBurger}: IHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${themeStyles.container} ${styles.headerContainer}`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link href='/'>
              <Icon className={styles.logo} name='logoMain' size={368} />
            </Link>
          </div>
          <button className={styles.city}>
            <Icon name='address' size={27} color='brown'/>
            <Text>Новосибирск</Text>
          </button>
        </div>
        <div className={styles.right}>
          <ContactButton color='brown' phoneColor='black' />
          <BurgerButton
            onPress={openBurger}
          />
        </div>
      </div>
    </header>
  )
}

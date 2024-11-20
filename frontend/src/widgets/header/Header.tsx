import {ContactButton} from '@/entities/contactButton/ContactButton'
import {BurgerButton} from '@/shared/ui'
import {Icon} from '@/shared/ui/icon/Icon'
import Link from 'next/link'
import {Text} from '@/shared/ui/text/Text'
import styles from './Header.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'

interface IHeaderProps {
  openBurger: () => void
}

export function Header({openBurger}: IHeaderProps) {
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
            <Icon name='address' size={27} color='brown' />
            <Text>Новосибирск</Text>
          </button>
        </div>
        <div className={styles.right}>
          <ContactButton color='brown' phoneColor='black' />
          <BurgerButton onPress={openBurger} />
        </div>
      </div>
    </header>
  )
}

import {ContactButton} from '@/entities/contactButton/ContactButton'
import {Icon} from '@/shared/ui/icon/Icon'
import {Divider} from '@/shared/ui/divider/Divider'
import {BurgerList} from './BurgerList'
import styles from './Burger.module.css'

interface IBurgerProps {
  isOpen: boolean
  onPress: () => void
}

const links = [
  {id: 1, text: 'Главная', href: '/'},
  {id: 2, text: 'О проекте', href: '/about-project'},
  {id: 3, text: 'Инфраструктура', href: '/infrastructura'},
  {id: 4, text: 'Квартиры', href: '/apartments'},
  {id: 5, text: 'Документы', href: '/documents'},
  {id: 6, text: 'Условия продаж', href: '/rules'},
  {id: 7, text: 'Ход строительства', href: '/history'},
  {id: 8, text: 'Контакты', href: '/contacts'},
  {id: 9, text: 'О застройщике', href: '/about-builder'},
]

export function Burger({isOpen, onPress}: IBurgerProps) {
  console.log('Исправить')
  return (
    <div
      className={
        isOpen ? `${styles.menu}` : `${styles.menu} ${styles.menuClosed}`
      }
      onClick={() => onPress()}
    >
      <div
        className={
          isOpen
            ? `${styles.menuContent}`
            : `${styles.menuContent} ${styles.contentClosed}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.topButton}>
          <ContactButton color='brown' phoneColor='black' />
          <button onClick={() => onPress()}>
            <Icon name='close' size={24} color='brown' />
          </button>
        </div>
        <Divider className={styles.divider} />
        <BurgerList links={links} onPress={onPress} />
      </div>
    </div>
  )
}

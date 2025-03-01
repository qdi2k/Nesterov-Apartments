import {ContactButton} from '@/entities/contactButton'
import {Icon, Divider, Text, DropdownMenu} from '@/shared/ui'
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
  {id: 6, text: 'Условия продажи', href: '/rules'},
  {id: 7, text: 'Ход строительства', href: '/history'},
  {id: 8, text: 'Контакты', href: '/contacts'},
  {id: 9, text: 'О застройщике', href: '/about-builder'},
]

const mockData = [
  {id: 1, city: 'Новосибирск'},
  {id: 2, city: 'Нижний Новгород'},
  {id: 3, city: 'Краснодар'},
]

export function Burger({isOpen, onPress}: IBurgerProps) {
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
          <div className={styles.textContainer}>
            <Text size='small' color='white' className={styles.phone}>
              +7 (495) 419-15-18
            </Text>
            <DropdownMenu title='Новосибирск' icon='address' data={mockData} />
          </div>
          <button onClick={() => onPress()}>
            <Icon name='close' size={24} color='white' />
          </button>
        </div>
        <Divider className={styles.divider} />
        <BurgerList links={links} onPress={onPress} />
      </div>
    </div>
  )
}

import {Icon, Divider, Text, DropdownMenu} from '@/shared/ui'
import {BurgerList} from './BurgerList'
import styles from './Burger.module.css'

interface IBurgerProps {
  isOpen: boolean
  onPress: () => void
}

const links = [
  {id: 1, text: 'Главная', href: '/'},
  {id: 2, text: 'Объекты', href: '/objects/object'},
  {id: 3, text: 'Квартиры', href: '/apartments'},
  {id: 4, text: 'Способы оплаты', href: '/payments'},
  {id: 5, text: 'Акции', href: '/events'},
  {id: 6, text: 'Новости', href: '/news'},
  {id: 7, text: 'Документы', href: '/documents'},
  {id: 8, text: 'Контакты', href: '/contacts'},
]

const mockData = [
  {id: 1, city: 'Москва'},
  {id: 2, city: 'Новосибирск'},
  {id: 3, city: 'Нижний Новгород'},
  {id: 4, city: 'Краснодар'},
]

export function Burger({isOpen, onPress}: IBurgerProps) {
  return (
    <div
      className={`${styles.menu} ${!isOpen && styles.menuClosed}`}
      onClick={() => onPress()}
    >
      <div
        className={`${styles.menuContent} ${!isOpen && styles.contentClosed}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.topButton}>
          <div className={styles.textContainer}>
            <Text href='tel:+74954191518' size='small' color='white' isHover>
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

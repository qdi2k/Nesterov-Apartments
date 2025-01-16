import {Text} from '@/shared/ui'
import {ApartmentCard} from '../apartment-card'
import styles from './SelectContent.module.css'

type Apartment = {
  id: number
  section: number
  floor: number
  rooms: number
  square: number
  price: number
}

interface ISelectContentProps {
  activeSelect: number
  apartments: Apartment[]
}

export function SelectContent({activeSelect, apartments}: ISelectContentProps) {
  const getStyles = () => {
    if (activeSelect === 1) {
      return styles.content1
    }
    if (activeSelect === 2) {
      return styles.content2
    }
    if (activeSelect === 3) {
      return styles.content3
    }
    return
  }

  return (
    <section className={styles.container}>
      <div className={getStyles()} />
      {activeSelect === 4 && apartments.length > 0 && (
        <ul className={styles.listContainer}>
          {apartments.map((item) => (
            <ApartmentCard
              key={item.id}
              rooms={item.rooms}
              square={item.square}
              floor={item.floor}
              section={item.section}
              price={item.price}
            />
          ))}
        </ul>
      )}
      {activeSelect === 4 && apartments.length === 0 && (
        <Text size='xMedium' weight='light' color='grey'>
          Свободных квартир нет. Попробуйте изменить параметры поиска
        </Text>
      )}
    </section>
  )
}

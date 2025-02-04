import Image from 'next/image'
import styles from './ApartmentCard.module.css'
import {Button, Text} from '@/shared/ui'

interface IApartmentCardProps {
  rooms: number
  square: number
  floor: number
  section: number
  price: number
}

export function ApartmentCard({
  rooms,
  square,
  floor,
  section,
  price,
}: IApartmentCardProps) {
  const formatedPrice = String(price)
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return (
    <div className={styles.container}>
      <Image
        src={require('../../shared/assets/images/apartment.png')}
        alt='carousel-item'
        height={365}
        width={800}
      />
      <div className={styles.rightContent}>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <Text size='sMedium' color='brown'>
              Количество
              <br />
              комнат
            </Text>
            <Text size='sMedium' className={styles.listValueText}>
              {rooms}
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='sMedium' color='brown'>
              Площадь
            </Text>
            <Text size='sMedium' className={styles.listValueText}>
              {square} кв.м.
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='sMedium' color='brown'>
              Этаж
            </Text>
            <Text size='sMedium' className={styles.listValueText}>
              {floor}
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='sMedium' color='brown'>
              Секция
            </Text>
            <Text size='sMedium' className={styles.listValueText}>
              {section}
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='sMedium' color='brown'>
              Стоимость
            </Text>
            <Text size='sMedium' className={styles.listValueText}>
              {formatedPrice} р.
            </Text>
          </li>
        </ul>
        <div className={styles.buttonsContainer}>
          <Button href='/apartments/apartment'>Узнать больше</Button>
        </div>
      </div>
    </div>
  )
}

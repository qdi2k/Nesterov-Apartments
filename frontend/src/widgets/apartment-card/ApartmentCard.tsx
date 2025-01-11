import Image from 'next/image'
import styles from './ApartmentCard.module.css'
import {Button, Text} from '@/shared/ui'

export function ApartmentCard() {
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
            <Text size='xMedium' color='brown'>
              Количество
              <br />
              комнат
            </Text>
            <Text size='xMedium' className={styles.listValueText}>
              2
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='xMedium' color='brown'>
              Площадь
            </Text>
            <Text size='xMedium' className={styles.listValueText}>
              72 кв.м.
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='xMedium' color='brown'>
              Этаж
            </Text>
            <Text size='xMedium' className={styles.listValueText}>
              4
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='xMedium' color='brown'>
              Секция
            </Text>
            <Text size='xMedium' className={styles.listValueText}>
              1
            </Text>
          </li>
          <li className={styles.listItem}>
            <Text size='xMedium' color='brown'>
              Стоимость
            </Text>
            <Text size='xMedium' className={styles.listValueText}>
              7 500 000 р.
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

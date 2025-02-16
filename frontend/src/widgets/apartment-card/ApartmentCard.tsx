'use client'

import Image from 'next/image'
import styles from './ApartmentCard.module.css'
import {Button, Text, Icon} from '@/shared/ui'
import apartmentImage from '@/shared/assets/images/apartment.png'

interface IApartmentCardProps {
  rooms: number
  square: number
  floor: number
  section: number
  price: number
  isInfo?: boolean
  className?: string
}

export function ApartmentCard({
  rooms,
  square,
  floor,
  section,
  price,
  isInfo,
  className,
}: IApartmentCardProps) {
  const formatedPrice = String(price)
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const handleScroll = () => {
    const targetBlock = document.getElementById('calculator')
    if (targetBlock) {
      targetBlock.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div className={`${styles.containerTest} ${className}`}>
      <div className={styles.image}>
        <Image
          src={apartmentImage}
          alt='apartment'
          className={styles.image}
          fill
        />
      </div>
      <ul className={styles.listContainerTest}>
        <li className={styles.listItemTest}>
          <Text size='sMedium' color='brown'>
            Количество комнат
          </Text>
          <Text size='sMedium' className={styles.value}>
            {rooms}
          </Text>
        </li>
        <li className={styles.listItemTest}>
          <Text size='sMedium' color='brown'>
            Площадь
          </Text>
          <Text size='sMedium' className={styles.value}>
            {square} кв.м.
          </Text>
        </li>
        <li className={styles.listItemTest}>
          <Text size='sMedium' color='brown'>
            Этаж
          </Text>
          <Text size='sMedium' className={styles.value}>
            {floor}
          </Text>
        </li>
        <li className={styles.listItemTest}>
          <Text size='sMedium' color='brown'>
            {square} кв.м.
          </Text>
          <Text size='sMedium' className={styles.value}>
            {floor}
          </Text>
        </li>
        <li className={styles.listItemTest}>
          <Text size='sMedium' color='brown'>
            Секция
          </Text>
          <Text size='sMedium' className={styles.value}>
            {section}
          </Text>
        </li>
        <li className={styles.listItemTest}>
          <Text size='sMedium' color='brown'>
            Стоимость
          </Text>
          <Text size='sMedium' className={styles.value}>
            {formatedPrice} р.
          </Text>
        </li>
      </ul>
      {isInfo ? (
        <button className={styles.countButton} onClick={handleScroll}>
          <Icon name='calculatorSmall' size={30} />
          <Text size='small' weight='bold'>
            Рассчитать ипотеку
          </Text>
          <Icon name='arrow' size={17} />
        </button>
      ) : (
        <Button href='/apartments/apartment' className={styles.button}>
          Узнать больше
        </Button>
      )}
    </div>
  )
}

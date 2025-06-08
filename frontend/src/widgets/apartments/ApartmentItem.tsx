'use client'

import {Text} from '@/shared/ui'
import styles from './Apartments.module.css'
import {motion} from 'framer-motion'
import Image from 'next/image'

export interface ApartmentProps {
  price: string
  src: string
  discountPrice?: string
  discount?: string
  rooms: string
  square: string
  floor: number
  delay: number
}

const getRoomTitle = (value: number) => {
  switch (value) {
    case 0:
      return 'Студия'
    case 1:
      return 'Однокомнатная'
    case 2:
      return 'Двухкомнатная'
    case 3:
      return 'Трехкомнатная'
    default:
      return 'Студия'
  }
}

export function ApartmentItem({
  price,
  src,
  discountPrice,
  discount,
  rooms,
  square,
  floor,
  delay,
}: ApartmentProps) {
  return (
    <motion.div
      className={styles.apartmentContainer}
      variants={{
        hidden: {
          x: -50,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: delay,
          },
        },
      }}
    >
      <div className={styles.image}>
        <Image
          src={src}
          className={styles.image}
          alt='apartment-image'
          fill
          sizes='100%'
        />
      </div>
      <div className={styles.textContainer}>
        <Text
          className={`${styles.price} ${discountPrice && styles.priceVisible}`}
        >
          {price} ₽
        </Text>
        <div className={styles.priceContainer}>
          <Text
            size='xMedium'
            weight='bold'
            color={discount ? 'orange' : 'greyDark'}
          >
            {discountPrice ?? price} ₽
          </Text>
          {discount && (
            <Text className={styles.discount} color='orange'>
              -{discount}%
            </Text>
          )}
        </div>
        <Text size='xSmall' weight='bold' className={styles.room}>
          {getRoomTitle(rooms)}
        </Text>
        <Text>
          {square} м² | {floor} этаж
        </Text>
      </div>
    </motion.div>
  )
}

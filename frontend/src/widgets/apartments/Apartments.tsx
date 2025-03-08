'use client'

import {Button, Text, Title} from '@/shared/ui'
import styles from './Apartments.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {theme} from '@/shared/model'
import Link from 'next/link'

interface ApartmentProps {
  id?: number
  price: string
  src: string
  discountPrice?: string
  discount?: string
  rooms: string
  square: string
  floor: number
}

interface ApartmentsProps {
  apartments: ApartmentProps[]
  title?: string
  buttonTitle?: string
}

const Apartment = ({
  price,
  src,
  id,
  discountPrice,
  discount,
  rooms,
  square,
  floor,
}: ApartmentProps) => {
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
            duration: 0.3,
            delay: id * 0.1,
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
          {rooms}
        </Text>
        <Text>
          {square} м² | {floor} этаж
        </Text>
      </div>
    </motion.div>
  )
}

export function Apartments({apartments, title, buttonTitle}: ApartmentsProps) {
  return (
    <motion.section
      className={styles.container}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
    >
      <div className={themeStyles.container}>
        <Title animation={theme.animations.opacity}>
          {title ?? 'Наши квартиры'}
        </Title>
        <div className={styles.apartmentsContainer}>
          {apartments.map((item) => (
            <Link href='/apartments2/apartment2' key={item.id}>
              <Apartment
                price={item.price}
                id={item.id}
                src={item.src}
                discountPrice={item.discountPrice}
                discount={item.discount}
                rooms={item.rooms}
                square={item.square}
                floor={item.floor}
              />
            </Link>
          ))}
        </div>
        <Button
          href='/apartments2'
          className={`${styles.button} ${buttonTitle && styles.buttonGrey}`}
          animation={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: apartments.length * 0.1 + 0.1,
              },
            },
          }}
        >
          {buttonTitle ?? 'Посмотреть все'}
        </Button>
      </div>
    </motion.section>
  )
}

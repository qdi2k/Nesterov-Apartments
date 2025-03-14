'use client'

import {Button, Text, Title} from '@/shared/ui'
import styles from './Apartments.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {theme} from '@/shared/model'
import Link from 'next/link'
import useGetMoreItem from '@/shared/model/useGetMoreItem'
import {Filter} from '@/entities/filter'

interface ApartmentProps {
  price: string
  src: string
  discountPrice?: string
  discount?: string
  rooms: string
  square: string
  floor: number
  delay: number
}

interface ApartmentsProps {
  apartments: ApartmentProps[]
  title?: string
  buttonTitle?: string
  isMore?: boolean
  isFilter?: boolean
}

const Apartment = ({
  price,
  src,
  discountPrice,
  discount,
  rooms,
  square,
  floor,
  delay,
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
          {rooms}
        </Text>
        <Text>
          {square} м² | {floor} этаж
        </Text>
      </div>
    </motion.div>
  )
}

export function Apartments({
  apartments,
  title,
  buttonTitle,
  isMore,
  isFilter,
}: ApartmentsProps) {
  const {handleShowMoreDocuments, getDelay, postsToShow} = useGetMoreItem(
    apartments,
    9
  )

  const currentData = isMore ? postsToShow : apartments
  const getButtonStatus = () => {
    if (!isMore) {
      return true
    }
    if (isMore && apartments.length > postsToShow.length) {
      return true
    }
    return false
  }
  return (
    <motion.section
      className={styles.container}
      initial='hidden'
      animate='visible'
      viewport={!isMore && {once: true}}
    >
      <div className={themeStyles.container}>
        <Title animation={theme.animations.opacity}>
          {title ?? 'Наши квартиры'}
        </Title>
        {isFilter && <Filter />}
        <div className={styles.apartmentsContainer}>
          {currentData.map((item) => (
            <Link href='/apartments/apartment' key={item.id}>
              <Apartment
                price={item.price}
                src={item.src}
                discountPrice={item.discountPrice}
                discount={item.discount}
                rooms={item.rooms}
                square={item.square}
                floor={item.floor}
                delay={isMore ? getDelay(item.id) : item.id * 0.1}
              />
            </Link>
          ))}
        </div>
        {getButtonStatus() && (
          <Button
            href={isMore ? '' : '/apartments'}
            onClick={isMore ? handleShowMoreDocuments : () => {}}
            isMore={isMore}
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
                  delay: isMore ? 0.6 : 1,
                },
              },
            }}
          >
            {buttonTitle ?? 'Посмотреть все'}
          </Button>
        )}
      </div>
    </motion.section>
  )
}

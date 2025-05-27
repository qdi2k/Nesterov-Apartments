'use client'

import {Button, Text} from '@/shared/ui'
import styles from './GroupApartment.module.css'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import objectImage from '@/shared/assets/images/objects/i.webp'
import {ApartmentItem} from '../apartments/ApartmentItem'

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
  data: ApartmentProps[]
  isMore?: boolean
}

const statuses = [
  {id: 1, status: 'I кв. 2026'},
  {id: 2, status: '-15% скидка', type: 'share'},
]

export function GroupApartment({data, onClick, isMore}: ApartmentsProps) {
  return (
    <motion.section
      className={styles.container}
      initial='hidden'
      animate='visible'
      viewport={!isMore && {once: true}}
    >
      <div className={styles.objectContainer}>
        <div className={styles.info}>
          <div className={styles.text}>
            <Text size='sMedium' weight='bold'>
              Mariinn
            </Text>
            <Text size='xSmall' weight='semiBold'>
              от 40 до 84 млн. ₽
            </Text>
          </div>
          <Button className={styles.button}>Подробнее</Button>
        </div>
        <div className={styles.objectImage}>
          <Image
            className={styles.objectImage}
            src={objectImage}
            alt='object-image'
            fill
            sizes='100%'
          />
          <div className={styles.statusContainer}>
            {statuses.map((status) => (
              <div
                className={`
                ${styles.status}
                ${status.type === 'started' && styles.statusStarted}
                ${status.type === 'share' && styles.statusShare}
              `}
                key={status.id}
              >
                <Text
                  color={
                    status.type === 'started' || status.type === 'share'
                      ? 'white'
                      : 'greyDark'
                  }
                >
                  {status.status}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.apartmentsContainer}>
        {data.map((item) => (
          <Link href='/apartments/apartment' key={item.id}>
            <ApartmentItem
              price={item.price}
              src={item.src}
              discountPrice={item.discountPrice}
              discount={item.discount}
              rooms={item.rooms}
              square={item.square}
              floor={item.floor}
              // delay={isMore ? getDelay(item.id) : item.id * 0.1}
            />
          </Link>
        ))}
      </div>
      {isMore && (
        <Button
          onClick={onClick}
          className={styles.moreButton}
          isMore
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
          Показать ещё
        </Button>
      )}
    </motion.section>
  )
}

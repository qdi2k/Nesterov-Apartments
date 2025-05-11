'use client'

import {Button, Text, Title} from '@/shared/ui'
import styles from './Objects.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image, {type StaticImageData} from 'next/image'
import {motion} from 'framer-motion'
import objectImage from '@/shared/assets/images/objects/9bfc46453fa2661e9489550ebef3c5472e643e20.jpeg'
import objectImage2 from '@/shared/assets/images/objects/dvor01_01_fin_1080__1jfuy9e.jpg'
import objectImage3 from '@/shared/assets/images/objects/i.webp'
import objectImage4 from '@/shared/assets/images/objects/optimize.webp'
import objectImage5 from '@/shared/assets/images/ourProject5.png'
import objectImage6 from '@/shared/assets/images/ourProject3.png'
import {theme} from '@/shared/model'
import Link from 'next/link'

const MOCK_OBJECTS = [
  {
    id: 1,
    title: 'Marlinn',
    statuses: [{id: 1, status: 'IV кв. 2025'}],
    src: objectImage,
    minPrice: 32,
    maxPrice: 78,
    totalApartments: 176,
    apartmentsLeft: 47,
  },
  {
    id: 2,
    title: 'Shagal',
    statuses: [
      {id: 1, status: 'II кв. 2027'},
      {id: 2, status: '-20% скидка', type: 'share'},
    ],
    src: objectImage2,
    minPrice: 24,
    maxPrice: 62,
    totalApartments: 121,
    apartmentsLeft: 89,
  },
  {
    id: 3,
    title: 'Rauta',
    statuses: [{id: 1, status: 'Старт продаж', type: 'started'}],
    src: objectImage3,
    minPrice: 29,
    maxPrice: 70,
    totalApartments: 138,
    apartmentsLeft: 104,
  },
  {
    id: 4,
    title: 'Nagatino',
    statuses: [{id: 1, status: 'III кв. 2026'}],
    src: objectImage4,
    minPrice: 40,
    maxPrice: 84,
    totalApartments: 100,
    apartmentsLeft: 56,
  },
  {
    id: 5,
    title: 'Sokolinn',
    statuses: [{id: 1, status: 'Старт продаж', type: 'started'}],
    src: objectImage5,
    minPrice: 17,
    maxPrice: 51,
    totalApartments: 154,
    apartmentsLeft: 69,
  },
  {
    id: 6,
    title: 'Voxhall',
    statuses: [
      {id: 1, status: 'I кв. 2026'},
      {id: 2, status: '-15% скидка', type: 'share'},
    ],
    src: objectImage6,
    minPrice: 25,
    maxPrice: 68,
    totalApartments: 112,
    apartmentsLeft: 77,
  },
]

interface ObjectItemProps {
  title: string
  src: StaticImageData
  id: number
  minPrice: number
  maxPrice: number
  totalApartments: number
  apartmentsLeft: number
}

interface ObjectProps {
  title?: string
}

const ObjectItem = ({
  title,
  statuses,
  src,
  id,
  minPrice,
  maxPrice,
  totalApartments,
  apartmentsLeft,
}: ObjectItemProps) => {
  return (
    <motion.div
      className={styles.objectItemContainer}
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
        <Image
          className={styles.image}
          src={src}
          alt='object-image'
          fill
          sizes='100%'
        />
      </div>
      <div className={styles.objectInfo}>
        <Text className={styles.titleObject} weight='bold'>
          {title}
        </Text>
        <Text size='xSmall' weight='semiBold'>
          от {minPrice} до {maxPrice} млн. ₽
        </Text>
        <ul className={styles.listInfo}>
          <li className={styles.listItem}>
            <Text>Цена</Text>
            <Text color='orange'>от {minPrice} млн. ₽</Text>
          </li>
          <li className={styles.listItem}>
            <Text>Всего</Text>
            <Text color='orange'>{totalApartments} квартир</Text>
          </li>
          <li className={styles.listItem}>
            <Text>Осталось</Text>
            <Text color='orange'>{apartmentsLeft} квартиры</Text>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export function Objects({title}: ObjectProps) {
  return (
    <motion.section
      className={`${themeStyles.container} ${styles.container}`}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
    >
      <Title animation={theme.animations.opacity}>
        {title ?? 'Наши объекты'}
      </Title>
      <div className={styles.objectsContainer}>
        {MOCK_OBJECTS.map((objectItem) => (
          <Link href='/objects/object' key={objectItem.id}>
            <ObjectItem
              title={objectItem.title}
              statuses={objectItem.statuses}
              src={objectItem.src}
              id={objectItem.id}
              minPrice={objectItem.minPrice}
              maxPrice={objectItem.maxPrice}
              totalApartments={objectItem.totalApartments}
              apartmentsLeft={objectItem.apartmentsLeft}
            />
          </Link>
        ))}
      </div>
      {/* <Button
        className={styles.button}
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
              delay: MOCK_OBJECTS.length * 0.1 + 0.1,
            },
          },
        }}
      >
        Посмотреть все
      </Button> */}
    </motion.section>
  )
}

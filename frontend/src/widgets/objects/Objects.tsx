'use client'

import {Text, Title} from '@/shared/ui'
import styles from './Objects.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image, {type StaticImageData} from 'next/image'
import {motion} from 'framer-motion'
import marlinnImage from '@/shared/assets/images/objects/9bfc46453fa2661e9489550ebef3c5472e643e20.jpeg'
import shagalImage from '@/shared/assets/images/objects/dvor01_01_fin_1080__1jfuy9e.jpg'
import rautaImage from '@/shared/assets/images/objects/i.webp'
import shagalResidenceImage from '@/shared/assets/images/objects/optimize.webp'
import voxhallImage from '@/shared/assets/images/ourProject5.png'
import sokolinnImage from '@/shared/assets/images/ourProject3.png'
import objects from '@/shared/assets/mockData/objects/objects.json'
import {theme} from '@/shared/model'
import Link from 'next/link'

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
  const getObjectImage = (value: string) => {
    switch (value) {
      case 'Marlinn':
        return marlinnImage
      case 'Shagal':
        return shagalImage
      case 'Rauta':
        return rautaImage
      case 'Shagal Residence':
        return shagalResidenceImage
      case 'Voxhall':
        return voxhallImage
      case 'Sokolinn':
        return sokolinnImage
      default:
        return marlinnImage
    }
  }
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
          src={getObjectImage(title)}
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
        {objects.objects.map((objectItem) => (
          <Link href={objectItem?.href} key={objectItem.id}>
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
    </motion.section>
  )
}

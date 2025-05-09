'use client'

import {Button, Title} from '@/shared/ui'
import styles from './Apartments.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {motion} from 'framer-motion'
import {theme} from '@/shared/model'
import Link from 'next/link'
import useGetMoreItem from '@/shared/model/useGetMoreItem'
import {Filter} from '@/entities/filter'
import {GroupApartment} from '../groupApartment'
import {ApartmentItem, type ApartmentProps} from './ApartmentItem'

interface ApartmentsProps {
  apartments: ApartmentProps[]
  title?: string
  buttonTitle?: string
  isMore?: boolean
  isFilter?: boolean
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
    6
  )

  const currentData = isMore ? postsToShow : apartments
  const isGroup = false

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
        {isGroup ? (
          <div className={styles.objectContainer}>
            <GroupApartment
              data={currentData}
              isMore={apartments.length > postsToShow.length}
              onClick={handleShowMoreDocuments}
            />
            <GroupApartment data={currentData} />
            <GroupApartment data={currentData} />
          </div>
        ) : (
          <>
            <div className={styles.apartmentsContainer}>
              {currentData.map((item) => (
                <Link href='/apartments/apartment' key={item.id}>
                  <ApartmentItem
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
                className={styles.moreButton}
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
          </>
        )}
      </div>
    </motion.section>
  )
}

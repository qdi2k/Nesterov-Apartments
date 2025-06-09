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
import apartmentImage1 from '@/shared/assets/images/apartments/6cedd80b436f266361756f174388a854c1451d8f.jpg'
import apartmentImage2 from '@/shared/assets/images/apartments/6f4dae2fcd0fcbe264fd1d4e840485b9.jpg'
import apartmentImage3 from '@/shared/assets/images/apartments/app_large.webp'
import apartmentImage4 from '@/shared/assets/images/apartments/fe0de264fc1403e149d5ee439a9bf335e4391cdc.jpg'
import apartmentImage5 from '@/shared/assets/images/apartments/i.webp'
import apartmentImage6 from '@/shared/assets/images/apartments/large.webp'
import apartmentImage7 from '@/shared/assets/images/apartments/0.webp'
import apartmentImage8 from '@/shared/assets/images/apartments/1.jpg'
import apartmentImage9 from '@/shared/assets/images/apartments/31.jpg'
import apartmentImage10 from '@/shared/assets/images/apartments/4.jpg'
import apartmentImage11 from '@/shared/assets/images/apartments/5.webp'
import apartmentImage12 from '@/shared/assets/images/apartments/6.jpeg'
import {useState} from 'react'
import {ApartmentItemSkeleton} from './ApartmentItemSkeleton'

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
  isLoad,
  isMore,
  isFilter,
}: ApartmentsProps) {
  const [apartmentsData, setApartmentsData] = useState(
    isFilter ? [] : apartments
  )
  const [isLoading, setIsLoading] = useState(isLoad || false)
  const {handleShowMoreItems, getDelay, dataToShow} = useGetMoreItem(
    apartmentsData,
    6
  )

  const currentData = isMore ? dataToShow : apartmentsData
  const isGroup = false

  const getButtonStatus = () => {
    if (!isMore) {
      return true
    }
    if (isMore && apartmentsData.length > dataToShow.length) {
      return true
    }
    return false
  }

  const getApartmentImage = (value) => {
    switch (value) {
      case 1:
        return apartmentImage4
      case 2:
        return apartmentImage8
      case 3:
        return apartmentImage7
      case 4:
        return apartmentImage3
      case 5:
        return apartmentImage1
      case 6:
        return apartmentImage9
      case 7:
        return apartmentImage2
      case 8:
        return apartmentImage5
      case 9:
        return apartmentImage6
      case 10:
        return apartmentImage10
      case 11:
        return apartmentImage11
      case 12:
        return apartmentImage12
      case 13:
        return apartmentImage8
      case 14:
        return apartmentImage7
      case 15:
        return apartmentImage3
      case 16:
        return apartmentImage1
      case 17:
        return apartmentImage6
      case 18:
        return apartmentImage2
      case 19:
        return apartmentImage11
      case 20:
        return apartmentImage1
      case 11:
        return apartmentImage6
      default:
        return apartmentImage1
    }
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
        {isFilter && (
          <Filter
            apartments={apartments}
            apartmentsData={apartmentsData}
            setApartmentsData={setApartmentsData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
        {isGroup ? (
          <div className={styles.objectContainer}>
            <GroupApartment
              data={currentData}
              isMore={apartments.length > dataToShow.length}
              onClick={handleShowMoreItems}
            />
            <GroupApartment data={currentData} />
            <GroupApartment data={currentData} />
          </div>
        ) : (
          <>
            <div className={styles.apartmentsContainer}>
              {isLoading ? (
                <>
                  <ApartmentItemSkeleton />
                  <ApartmentItemSkeleton />
                  <ApartmentItemSkeleton />
                  <ApartmentItemSkeleton />
                  <ApartmentItemSkeleton />
                  <ApartmentItemSkeleton />
                </>
              ) : (
                <>
                  {dataToShow.map((item, index) => (
                    <Link href={`/apartments/${item.id}`} key={item.id}>
                      <ApartmentItem
                        price={item.price.toLocaleString('ru-RU')}
                        src={getApartmentImage(item.id)}
                        discountPrice={item.discountPrice}
                        discount={item.discount}
                        rooms={item.rooms}
                        square={item.square}
                        floor={item.floor}
                        delay={isMore ? getDelay(index) : index * 0.1}
                      />
                    </Link>
                  ))}
                </>
              )}
            </div>
            {getButtonStatus() && (
              <Button
                href={isMore ? '' : '/apartments'}
                className={styles.moreButton}
                onClick={isMore ? handleShowMoreItems : () => {}}
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

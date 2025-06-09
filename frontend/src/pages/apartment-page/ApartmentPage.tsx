'use client'

import {Apartments} from '@/widgets/apartments'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './ApartmentPage.module.css'
import {Button, Skeleton, Text} from '@/shared/ui'
import {Record} from '@/widgets/record'
import Image from 'next/image'
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
import apartments from '@/shared/assets/mockData/apartments/apartments.json'
import {Peculiarity} from '@/widgets/peculiarity'
import {MortgageCalculator} from '@/widgets/mortgage-calculator'
import {useEffect, useRef, useState} from 'react'
import {RecordPopup} from '@/shared/ui/record-popup'

interface IApartmentPageProps {
  id: number
}

const MOCK_APARTMENTS = [
  {
    id: 1,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
  {
    id: 2,
    price: '16 086 100',
    src: apartmentImage2,
    discountPrice: '13 673 185',
    discount: '15',
    rooms: 'Однокомнатная',
    square: '21.7',
    floor: 12,
  },
  {
    id: 3,
    price: '14 800 000',
    src: apartmentImage3,
    rooms: 'Студия',
    square: '15',
    floor: 8,
  },
  {
    id: 4,
    price: '16 500 000',
    src: apartmentImage4,
    rooms: 'Однокомнатная',
    square: '19.1',
    floor: 2,
  },
  {
    id: 5,
    price: '12 430 000',
    src: apartmentImage5,
    rooms: 'Трехкомнатная',
    square: '34.2',
    floor: 14,
  },
  {
    id: 6,
    price: '21 200 000',
    src: apartmentImage6,
    discountPrice: '18 020 000',
    discount: '15',
    rooms: 'Двухкомнатная',
    square: '22.9',
    floor: 11,
  },
  {
    id: 7,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
  {
    id: 8,
    price: '16 086 100',
    src: apartmentImage2,
    discountPrice: '13 673 185',
    discount: '15',
    rooms: 'Однокомнатная',
    square: '21.7',
    floor: 12,
  },
  {
    id: 9,
    price: '14 800 000',
    src: apartmentImage3,
    rooms: 'Студия',
    square: '15',
    floor: 8,
  },
]

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

const ApartmentImageSkeleton = () => {
  return (
    <div className={styles.apartmentContainerSkeleton}>
      <Skeleton width='100%' height='700px' className={styles.skeleton} />
    </div>
  )
}

const ApartmentInfoSkeleton = () => {
  return (
    <div className={styles.apartmentInfoContainerSkeleton}>
      <div className={styles.skeletonHeader}>
        <Skeleton width='100%' height='30px' />
        <Skeleton width='80%' height='30px' />
        <div className={styles.skeletonStatus}>
          <Skeleton width='10%' height='30px' />
          <Skeleton width='25%' height='30px' />
        </div>
      </div>
      <div className={styles.skeletonContent}>
        <Skeleton width='30%' height='30px' />
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <Skeleton width='30%' height='30px' className={styles.skeletonTitle} />
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <div className={styles.skeletonRow}>
          <Skeleton width='40%' height='30px' />
          <Skeleton width='40%' height='30px' />
        </div>
        <Skeleton width='100%' height='60px' />
      </div>
    </div>
  )
}

const ApartmentInfo = ({scrollToTarget, openRecord, id}) => {
  const [isLoading, setIsLoading] = useState(true)

  const data = apartments.apartments[id - 1]

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1400)
  }, [])

  return (
    <div className={styles.container}>
      <div className={`${themeStyles.container} ${styles.contentContainer}`}>
        {isLoading ? (
          <ApartmentImageSkeleton />
        ) : (
          <div className={styles.image}>
            <Image
              src={getApartmentImage(data.id)}
              className={styles.image}
              alt='apartment-image'
              fill
              sizes='100%'
            />
          </div>
        )}
        {isLoading ? (
          <ApartmentInfoSkeleton />
        ) : (
          <div className={styles.content}>
            <div className={styles.topContainer}>
              <Text size='sMedium' weight='bold'>
                {`${getRoomTitle(data.rooms)}, ${data.square} м²`}
              </Text>
              <div>
                <div className={styles.priceContainer}>
                  {data.discountPrice && (
                    <Text size='sMedium' weight='bold' color='orange'>
                      {data.discountPrice} ₽
                    </Text>
                  )}
                  <Text
                    size={!data.discountPrice ? 'sMedium' : 'small'}
                    weight={!data.discountPrice ? 'bold' : 'regular'}
                    color={!data.discountPrice ? 'orange' : 'greyDark'}
                    className={data.discountPrice ? styles.totalPrice : ''}
                  >
                    {data.price.toLocaleString('ru-RU')} ₽
                  </Text>
                </div>
                <Text>
                  {Math.floor(
                    (data.discountPrice ?? data.price) / data.square
                  ).toLocaleString('ru-RU')}{' '}
                  ₽/м²
                </Text>
              </div>
              {(data.discount || data.date) && (
                <div className={styles.statusContainer}>
                  {data.discount && (
                    <Text className={styles.status} color='orange'>
                      -{data.discount}%
                    </Text>
                  )}
                  {data.date && (
                    <Text className={styles.statusGrey}>{data.date}</Text>
                  )}
                </div>
              )}
            </div>
            <div>
              <Text size='xSmall' weight='bold'>
                О квартире
              </Text>
              <div className={styles.tableInfoContainer}>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Проект</Text>
                  <Text>Marlinn</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Адрес</Text>
                  <Text>ул. Октябрьская, д. 4</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Площадь</Text>
                  <Text>Площадь 34.2 м²</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Корпус</Text>
                  <Text>Корпус 7</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Секция</Text>
                  <Text>Секция 1</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Этаж</Text>
                  <Text>14 из 15</Text>
                </div>
              </div>
              <Text weight='bold' className={styles.tableTitle}>
                Размеры
              </Text>
              <div className={styles.tableInfoContainer}>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Прихожая</Text>
                  <Text>5.1 м²</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Кухня</Text>
                  <Text>8.1 м²</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Комната</Text>
                  <Text>13.5 м²</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Санузел</Text>
                  <Text>7.8 м²</Text>
                </div>
                <div className={styles.tableInfo}>
                  <Text color='blueLight'>Балкон</Text>
                  <Text>5.33 м²</Text>
                </div>
              </div>
            </div>
            <div>
              <Button
                className={styles.button}
                textColor='greyDark'
                onClick={scrollToTarget}
              >
                Рассчитать ипотеку
              </Button>
              <Button className={styles.buttonMain} onClick={openRecord}>
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function ApartmentPage({id}: IApartmentPageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const componentRef = useRef(null)

  const scrollToTarget = () => {
    componentRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const openRecord = () => {
    document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }
  const closeRecord = () => {
    document.body.style.overflow = 'visible'
    setIsOpen(false)
  }
  return (
    <div>
      <ApartmentInfo
        scrollToTarget={scrollToTarget}
        openRecord={openRecord}
        id={id}
      />
      <Peculiarity />
      <MortgageCalculator ref={componentRef} />
      <Apartments
        apartments={MOCK_APARTMENTS}
        title='Похожие квартиры'
        buttonTitle='Показать ещё'
        isMore
      />
      <Record />
      <RecordPopup
        isOpen={isOpen}
        closeRecord={closeRecord}
        openRecord={openRecord}
      />
    </div>
  )
}

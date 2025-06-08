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
import {Peculiarity} from '@/widgets/peculiarity'
import {MortgageCalculator} from '@/widgets/mortgage-calculator'
import {useEffect, useRef, useState} from 'react'
import {RecordPopup} from '@/shared/ui/record-popup'

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

const ApartmentInfo = ({scrollToTarget, openRecord}) => {
  const [isLoading, setIsLoading] = useState(true)

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
              src={apartmentImage1}
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
                Трехкомнатная, 34.2 м²
              </Text>
              <div>
                <div className={styles.priceContainer}>
                  <Text size='sMedium' weight='bold' color='orange'>
                    20 187 000 ₽
                  </Text>
                  <Text className={styles.totalPrice}>22 430 000 ₽</Text>
                </div>
                <Text>590 263 ₽/м²</Text>
              </div>
              <div className={styles.statusContainer}>
                <Text className={styles.status} color='orange'>
                  -10%
                </Text>
                <Text className={styles.statusGrey}>II квартал 2026</Text>
              </div>
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

export function ApartmentPage() {
  const [isOpen, setIsOpen] = useState(false)
  const componentRef = useRef(null)

  const scrollToTarget = () => {
    componentRef.current.scrollIntoView({behavior: 'smooth'})
  }
  const openRecord = () => {
    // document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }
  const closeRecord = () => {
    // document.body.style.overflow = 'visible'
    setIsOpen(false)
  }
  return (
    <div>
      <ApartmentInfo scrollToTarget={scrollToTarget} openRecord={openRecord} />
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

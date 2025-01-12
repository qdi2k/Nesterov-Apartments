'use client'
import {useEffect, useRef, useState} from 'react'
import styles from './Carousel.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {Icon, Text} from '@/shared/ui'
import {CarouselItem} from './ui'

type CarouselTabData = {
  id: number
  title: string
  description: string
  img: string
}

type CarouselData = {
  id: number
  title: string
  tabData: CarouselTabData[]
}

interface ICarouselProps {
  mockData: CarouselData[]
  isArrow?: boolean
}

const nextHandler = (
  isItem: boolean,
  changeId: (id: number) => void,
  id: number
) => {
  if (isItem) {
    changeId(id + 1)
  }
}

const prevHandler = (
  isItem: boolean,
  changeId: (id: number) => void,
  id: number
) => {
  if (isItem) {
    changeId(id - 1)
  }
}

export function Carousel({mockData, isArrow}: ICarouselProps) {
  const [carouselDataId, setCarouselDataId] = useState(1)
  const [itemDataId, setItemDataId] = useState(1)
  const [itemPosition, setItemPosition] = useState(3)
  const previewContainer = useRef<HTMLDivElement>(null)

  const itemData = mockData?.filter((item) => item?.id === carouselDataId)
  const itemDataFilter = itemData[0]?.tabData?.filter(
    (item) => item?.id === itemDataId
  )

  const isItemRight = carouselDataId !== mockData.length
  const isItemLeft = carouselDataId > 1

  const nextHandler1 = (
    isItem: boolean,
    changeId: (id: number) => void,
    setItemDataId: (id: number) => void,
    id: number
  ) => {
    if (isItem) {
      changeId(id + 1)
      setItemDataId(1)
      if (itemPosition !== 4) {
        setItemPosition((prev) => prev + 1)
      }
    }
  }

  const prevHandler1 = (
    isItem: boolean,
    changeId: (id: number) => void,
    setItemDataId: (id: number) => void,
    id: number
  ) => {
    if (isItem) {
      changeId(id - 1)
      setItemDataId(1)
      if (itemPosition !== 1) {
        setItemPosition((prev) => prev - 1)
      }
    }
  }

  useEffect(() => {
    if (!previewContainer.current) {
      return
    }

    if (itemPosition === 1) {
      previewContainer.current.style.transform = `translate3d(-${carouselDataId * 258 - 258}px, 0, 0)`
      return
    }

    if (itemPosition === 3 || itemPosition === 2) {
      return
    }

    if (itemPosition === 4) {
      previewContainer.current.style.transform = `translate3d(-${(carouselDataId - 4) * 258}px, 0, 0)`
      return
    }
  }, [itemPosition, carouselDataId])

  return (
    <div>
      <div className={themeStyles.container}>
        <div className={styles.carouselTitleNavigation}>
          {isArrow && (
            <button
              onClick={() =>
                prevHandler1(
                  isItemLeft,
                  setCarouselDataId,
                  setItemDataId,
                  carouselDataId
                )
              }
            >
              <Icon
                name='arrow'
                size={24}
                className={styles.arrowLeft}
                color='brown'
              />
            </button>
          )}
          <div className={styles.titleWrapper}>
            <div className={styles.titleContainer} ref={previewContainer}>
              {mockData.map((data) => (
                <button
                  key={data.id}
                  onClick={() => setCarouselDataId(data.id)}
                  className={`${data.id === carouselDataId ? styles.activeButton : ''} ${styles.title}`}
                >
                  <Text
                    size='xMedium'
                    weight='light'
                    isUppercase
                    color={data.id === carouselDataId ? 'brown' : 'grey'}
                  >
                    {data.title}
                  </Text>
                </button>
              ))}
            </div>
          </div>
          {isArrow && (
            <button
              onClick={() =>
                nextHandler1(
                  isItemRight,
                  setCarouselDataId,
                  setItemDataId,
                  carouselDataId
                )
              }
            >
              <Icon name='arrow' size={24} color='brown' />
            </button>
          )}
        </div>
        {itemDataFilter?.map((item) => (
          <CarouselItem
            key={item.id}
            title={item.title}
            description={item.description}
            itemData={itemData[0].tabData}
            itemId={itemDataId}
            changeItem={setItemDataId}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        ))}
      </div>
    </div>
  )
}

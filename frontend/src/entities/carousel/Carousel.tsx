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

const nextItemHandler = (
  isItem: boolean,
  changeId: (id: number) => void,
  id: number
) => {
  if (isItem) {
    changeId(id + 1)
  }
}

const prevItemHandler = (
  isItem: boolean,
  changeId: (id: number) => void,
  id: number
) => {
  if (isItem) {
    changeId(id - 1)
  }
}

const MAX_POSITION = () => {
  if (innerWidth <= 460) {
    return 1
  }
  if (innerWidth <= 736) {
    return 2
  }
  if (innerWidth <= 1020) {
    return 3
  }
  return 4
}

const MAX_INNER_WIDTH = innerWidth >= 1198 ? 1198 : innerWidth

const CARD_WIDTH = (MAX_INNER_WIDTH - 128) / MAX_POSITION()

export function Carousel({mockData, isArrow}: ICarouselProps) {
  const [carouselDataId, setCarouselDataId] = useState(1)
  const [itemDataId, setItemDataId] = useState(1)
  const [itemPosition, setItemPosition] = useState(3)
  const previewContainer = useRef<HTMLUListElement>(null)

  const itemData = mockData?.filter((item) => item?.id === carouselDataId)
  const itemDataFilter = itemData[0]?.tabData?.filter(
    (item) => item?.id === itemDataId
  )

  const isItemRight = carouselDataId !== mockData.length
  const isItemLeft = carouselDataId > 1

  console.log(CARD_WIDTH)

  const nextTitleHandler = (
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

  const prevTitleHandler = (
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

  const onClickTitle = (id: number) => {
    setItemDataId(1)
    setCarouselDataId(id)
  }

  useEffect(() => {
    if (!previewContainer.current) {
      return
    }

    if (itemPosition === 1) {
      previewContainer.current.style.transform = `translate3d(-${carouselDataId * CARD_WIDTH - CARD_WIDTH}px, 0, 0)`
      return
    }

    if (itemPosition === 4) {
      previewContainer.current.style.transform = `translate3d(-${(carouselDataId - MAX_POSITION()) * CARD_WIDTH}px, 0, 0)`
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
                prevTitleHandler(
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
            <ul className={styles.listContainer} ref={previewContainer}>
              {mockData.map((data) => (
                <button
                  key={data.id}
                  onClick={() => onClickTitle(data.id)}
                  className={`${data.id === carouselDataId ? styles.activeButton : ''} ${styles.buttonListItem}`}
                >
                  <Text
                    size='sMedium'
                    weight='regular'
                    isUppercase
                    color={data.id === carouselDataId ? 'brown' : 'grey'}
                  >
                    {data.title}
                  </Text>
                </button>
              ))}
            </ul>
          </div>
          {isArrow && (
            <button
              onClick={() =>
                nextTitleHandler(
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
            nextHandler={nextItemHandler}
            prevHandler={prevItemHandler}
          />
        ))}
      </div>
    </div>
  )
}

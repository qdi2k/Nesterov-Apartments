'use client'
import {useState} from 'react'
import styles from './Carousel.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {Icon, SubstrateButton, Text} from '@/shared/ui'
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
  const itemData = mockData?.filter((item) => item?.id === carouselDataId)
  const itemDataFilter = itemData[0].tabData?.filter(
    (item) => item?.id === itemDataId
  )

  const isItemRight = carouselDataId !== mockData.length
  const isItemLeft = carouselDataId > 1

  return (
    <div>
      <div className={themeStyles.container}>
        <div className={styles.carouselTitleNavigation}>
          {isArrow && (
            <button
              onClick={() =>
                prevHandler(isItemLeft, setCarouselDataId, carouselDataId)
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
          <div className={styles.titleContainer}>
            {mockData.map((data) => (
              <button
                key={data.id}
                onClick={() => setCarouselDataId(data.id)}
                className={
                  data.id === carouselDataId ? styles.activeButton : ''
                }
              >
                <Text
                  className={styles.title}
                  size='xMedium'
                  weight='light'
                  color={data.id === carouselDataId ? 'brown' : 'grey'}
                >
                  {data.title}
                </Text>
              </button>
            ))}
          </div>
          {isArrow && (
            <button
              onClick={() =>
                nextHandler(isItemRight, setCarouselDataId, carouselDataId)
              }
            >
              <Icon name='arrow' size={24} color='brown' />
            </button>
          )}
        </div>
        {itemDataFilter.map((item) => (
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
      <SubstrateButton
        className={styles.substrateButtonContainer}
        textButton='Записаться на просмотр'
      >
        Увидеть готовность проекта своими глазами
      </SubstrateButton>
    </div>
  )
}

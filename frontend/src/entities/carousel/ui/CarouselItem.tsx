import styles from './CarouselItem.module.css'
import {Icon, Text} from '@/shared/ui'
import Image from 'next/image'

type CarouselItemData = {
  id: number
  title: string
  description: string
  img: string
}

interface ICarouselItemProps {
  itemData: CarouselItemData[]
  title: string
  description: string
  itemId: number
  changeItem: (id: number) => void
  nextHandler: (
    isItem: boolean,
    changeId: (id: number) => void,
    id: number
  ) => void
  prevHandler: (
    isItem: boolean,
    changeId: (id: number) => void,
    id: number
  ) => void
}

export function CarouselItem({
  itemData,
  title,
  description,
  itemId,
  changeItem,
  nextHandler,
  prevHandler,
}: ICarouselItemProps) {
  const isItemRight = itemId !== itemData.length
  const isItemLeft = itemId > 1
  return (
    <div className={styles.container}>
      <Image
        src={require('../../../shared/assets/images/historyItemImage.png')}
        alt='carousel-item'
        height={444}
        width={770}
      />
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <Text
            size='small'
            weight='semiBold'
            color='brown'
            className={styles.title}
          >
            {title}
          </Text>
          <Text weight='light' className={styles.description}>
            {description}
          </Text>
        </div>
        <div className={styles.navigationContainer}>
          <button onClick={() => prevHandler(isItemLeft, changeItem, itemId)}>
            <Icon
              name='arrow'
              size={24}
              color='brown'
              className={styles.arrowLeft}
            />
          </button>
          {itemData.map((item) => (
            <button
              className={`${itemId === item.id ? styles.circleActive : styles.circle}`}
              key={item.id}
              onClick={() => changeItem(item.id)}
            />
          ))}
          <button onClick={() => nextHandler(isItemRight, changeItem, itemId)}>
            <Icon
              name='arrow'
              size={24}
              color='brown'
              className={styles.arrowRight}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

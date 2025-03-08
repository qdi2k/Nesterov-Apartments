'use client'

import {Icon, Text} from '@/shared/ui'
import styles from './TitleCarousel.module.css'
import {useEffect, useRef, useState} from 'react'
import {type StaticImageData} from 'next/image'

type Data = {
  id: number
  title: string
  infoTitle?: string
  infoDescription?: string
  images?: StaticImageData[]
}

interface TitleCarouselProps {
  data: Data[]
  titleActive: number
  changeTitleActive: React.Dispatch<React.SetStateAction<number>>
  isGrey?: boolean
}

export function TitleCarousel({
  data,
  titleActive,
  changeTitleActive,
  isGrey,
}: TitleCarouselProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const listRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const handlePrev = () => {
    if (titleActive > 1) {
      changeTitleActive((prev) => (prev > 1 ? prev - 1 : data.length))
    }
  }

  const handleNext = () => {
    if (titleActive < data.length) {
      changeTitleActive((prev) => (prev < data.length ? prev + 1 : 1))
    }
  }

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false)
      return
    }
    if (itemRefs.current[titleActive - 1]) {
      itemRefs.current[titleActive - 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [titleActive])

  return (
    <div className={styles.titleCarouselContainer}>
      <div
        className={`${styles.arrow} ${styles.arrowLeft} ${isGrey && styles.greyColor} ${titleActive === 1 && styles.arrowDisabled}`}
        onClick={handlePrev}
      >
        <Icon name='arrow' />
      </div>
      <ul
        ref={listRef}
        className={`${styles.listTitleContainer} ${isGrey && styles.greyColor}`}
      >
        {data.map((item, index) => (
          <Text
            key={item.id}
            ref={(el: HTMLDivElement | null) => (itemRefs.current[index] = el)}
            className={`${styles.listTitle} ${titleActive === item.id && styles.listTitleActive}`}
            color={titleActive === item.id ? 'white' : 'greyDark'}
            onClick={() => changeTitleActive(item.id)}
            size='xSmall'
          >
            {item.title}
          </Text>
        ))}
      </ul>
      <div
        className={`${styles.arrow} ${isGrey && styles.greyColor} ${titleActive === data.length && styles.arrowDisabled}`}
        onClick={handleNext}
      >
        <Icon name='arrow' />
      </div>
    </div>
  )
}

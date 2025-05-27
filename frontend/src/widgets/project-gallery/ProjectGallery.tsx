'use client'

import {Icon, Title} from '@/shared/ui'
import styles from './ProjectGallery.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {GalleryItem} from './ui'
import {useEffect, useRef, useState} from 'react'
import ourProject1Image from '@/shared/assets/images/ourProject1.png'
import ourProject2Image from '@/shared/assets/images/ourProject2.png'
import ourProject3Image from '@/shared/assets/images/ourProject3.png'
import ourProject4Image from '@/shared/assets/images/ourProject4.png'
import ourProject5Image from '@/shared/assets/images/ourProject5.png'
import ourProject6Image from '@/shared/assets/images/ourProject6.png'

const mockData = [
  {
    id: 1,
    title: 'ЖК «ТИХИЕ ЗОРИ» 1',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: ourProject1Image,
  },
  {
    id: 2,
    title: 'ЖК «РОДНИКИ» 2',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: ourProject2Image,
  },
  {
    id: 3,
    title: 'ЖК «ТИХИЕ ЗОРИ» 3',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: ourProject3Image,
  },
  {
    id: 4,
    title: 'ЖК «РОДНИКИ» 4',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: ourProject4Image,
  },
  {
    id: 5,
    title: 'ЖК «ТИХИЕ ЗОРИ» 5',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: ourProject5Image,
  },
  {
    id: 6,
    title: 'ЖК «ТИХИЕ ЗОРИ» 6',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: ourProject6Image,
  },
]

const MAX_POSITION = () => {
  if (innerWidth <= 720) {
    return 1
  }
  if (innerWidth <= 922) {
    return 2
  }
  if (innerWidth <= 1240) {
    return 3
  }
  return 4
}

const INITIAL_POSITION = MAX_POSITION() - 1 < 2 ? 1 : MAX_POSITION() - 1

const MAX_INNER_WIDTH = innerWidth > 1628 ? 1628 : innerWidth

export function ProjectGallery() {
  const [selectedItemId, setSelectedItemId] = useState(INITIAL_POSITION)
  const [itemPosition, setItemPosition] = useState(INITIAL_POSITION)
  const previewContainer = useRef<HTMLUListElement>(null)

  const isItemRight = selectedItemId !== mockData.length
  const isItemLeft = selectedItemId > 1

  const cardWidth = (MAX_INNER_WIDTH - 48) / MAX_POSITION()

  const nextHandler = () => {
    if (isItemRight) {
      setSelectedItemId(selectedItemId + 1)
      if (itemPosition !== MAX_POSITION()) {
        setItemPosition((prev) => prev + 1)
      }
    }
  }

  const prevHandler = () => {
    if (isItemLeft) {
      setSelectedItemId(selectedItemId - 1)
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
      previewContainer.current.style.transform = `translate3d(-${selectedItemId * cardWidth - cardWidth}px, 0, 0)`
      return
    }

    if (itemPosition === MAX_POSITION()) {
      previewContainer.current.style.transform = `translate3d(-${(selectedItemId - MAX_POSITION()) * cardWidth}px, 0, 0)`
      return
    }
  }, [itemPosition, selectedItemId, cardWidth])

  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title>Наши проекты</Title>
      <div className={styles.navigationContainer}>
        <button onClick={() => prevHandler()}>
          <Icon
            name='arrow'
            size={24}
            color='brown'
            className={styles.arrowLeft}
          />
        </button>
        <button onClick={() => nextHandler()}>
          <Icon name='arrow' size={24} color='brown' />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <ul className={styles.listContainer} ref={previewContainer}>
          {mockData.map((data) => (
            <GalleryItem
              key={data.id}
              title={data.title}
              description={data.description}
              homeInfo={data.homeInfo}
              isSelectedItem={data.id === selectedItemId}
              img={data.img}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

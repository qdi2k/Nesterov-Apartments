'use client'

import {Icon, Title} from '@/shared/ui'
import styles from './ProjectGallery.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {GalleryItem} from './ui'
import {useEffect, useRef, useState} from 'react'

const mockData = [
  {
    id: 1,
    title: 'ЖК «ТИХИЕ ЗОРИ» 1',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: 'ourProject1',
  },
  {
    id: 2,
    title: 'ЖК «РОДНИКИ» 2',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: 'ourProject2',
  },
  {
    id: 3,
    title: 'ЖК «ТИХИЕ ЗОРИ» 3',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: 'ourProject3',
  },
  {
    id: 4,
    title: 'ЖК «РОДНИКИ» 4',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: 'ourProject4',
  },
  {
    id: 5,
    title: 'ЖК «ТИХИЕ ЗОРИ» 5',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: 'historyItemImage',
  },
  {
    id: 6,
    title: 'ЖК «ТИХИЕ ЗОРИ» 6',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
    img: 'ourProject1',
  },
]

export function ProjectGallery() {
  const [selectedItemId, setSelectedItemId] = useState(3)
  const [itemPosition, setItemPosition] = useState(3)
  const previewContainer = useRef<HTMLUListElement>(null)

  const isItemRight = selectedItemId !== mockData.length
  const isItemLeft = selectedItemId > 1

  const nextHandler = () => {
    if (isItemRight) {
      setSelectedItemId(selectedItemId + 1)
      if (itemPosition !== 4) {
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
      previewContainer.current.style.transform = `translate3d(-${selectedItemId * 397 - 397}px, 0, 0)`
      return
    }

    if (itemPosition === 3 || itemPosition === 2) {
      return
    }

    if (itemPosition === 4) {
      previewContainer.current.style.transform = `translate3d(-${(selectedItemId - 4) * 397}px, 0, 0)`
      return
    }
  }, [itemPosition, selectedItemId])

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

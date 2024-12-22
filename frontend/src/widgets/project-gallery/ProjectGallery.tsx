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
    img: '../../../shared/assets/images/historyItemImage.png',
  },
  {
    id: 2,
    title: 'ЖК «РОДНИКИ» 2',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
  },
  {
    id: 3,
    title: 'ЖК «ТИХИЕ ЗОРИ» 3',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
  },
  {
    id: 4,
    title: 'ЖК «РОДНИКИ» 4',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
  },
  {
    id: 5,
    title: 'ЖК «ТИХИЕ ЗОРИ» 5',
    description:
      'Начало строительства — август 2015 года, окончание — I квартал 2017 г',
    homeInfo: '24 этажа, 3 корпуса',
  },
]

export function ProjectGallery() {
  const [selectedItemId, setSelectedItemId] = useState(3)
  const previewContainer = useRef<HTMLUListElement>(null)

  const isItemRight = selectedItemId !== mockData.length
  const isItemLeft = selectedItemId > 1

  const nextHandler = () => {
    if (isItemRight) {
      setSelectedItemId(selectedItemId + 1)
    }
  }

  const prevHandler = () => {
    if (isItemLeft) {
      setSelectedItemId(selectedItemId - 1)
    }
  }

  useEffect(() => {
    if (!previewContainer.current) {
      return
    }
    if (selectedItemId > 4) {
      previewContainer.current.style.transform = `translate3d(-397px, 0, 0)`
    }
    if (selectedItemId === 1) {
      previewContainer.current.style.transform = `translate3d(0, 0, 0)`
    }
  }, [selectedItemId])

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
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

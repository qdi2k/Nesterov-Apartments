'use client'

import {Title} from '@/shared/ui'
import styles from './ProgressBuild.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import image1 from '@/shared/assets/images/objects/9bfc46453fa2661e9489550ebef3c5472e643e20.jpeg'
import image2 from '@/shared/assets/images/objects/dvor01_01_fin_1080__1jfuy9e.jpg'
import image3 from '@/shared/assets/images/objects/i.webp'
import image4 from '@/shared/assets/images/objects/optimize.webp'
import Image from 'next/image'
import {TitleCarousel} from '@/entities/title-carousel'
import {useState} from 'react'
import {Gallery} from '../gallery/Gallery'
import {GalleryFull} from '../gallery-full'

const MOCK_IMAGES = [
  {id: 1, src: image1},
  {id: 2, src: image2},
  {id: 3, src: image3},
  {id: 4, src: image4},
]

const MOCK_PROGRESS = [
  {id: 1, title: 'Сентябрь 2024'},
  {id: 2, title: 'Октябрь 2024'},
  {id: 3, title: 'Ноябрь 2024'},
  {id: 4, title: 'Декабрь 2024'},
  {id: 5, title: 'Январь 2024'},
  {id: 6, title: 'Февраль 2024'},
  {id: 7, title: 'Март 2024'},
  {id: 8, title: 'Апрель 2024'},
  {id: 9, title: 'Май 2024'},
  {id: 10, title: 'Июнь 2024'},
  {id: 11, title: 'Июль 2024'},
  {id: 12, title: 'Август 2024'},
]

export function ProgressBuild() {
  const [titleActive, setTitleActive] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openGallery = (index) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }

  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title>Ход строительства</Title>
      <TitleCarousel
        data={MOCK_PROGRESS}
        titleActive={titleActive}
        changeTitleActive={setTitleActive}
        isGrey
      />
      <div className={styles.imageContainer}>
        {MOCK_IMAGES.map((image, index) => (
          <div className={styles.image} key={image.id}>
            <Image
              src={image.src}
              className={styles.image}
              onClick={() => openGallery(index)}
              alt='progress-image'
              fill
              sizes='100%'
            />
          </div>
        ))}
      </div>
      <Gallery images={MOCK_IMAGES} className={styles.gallery} isPadding />
      <GalleryFull
        images={MOCK_IMAGES}
        selectedIndex={selectedIndex}
        isOpen={isOpen}
        handleChangeImage={setSelectedIndex}
        handleOpenGallery={setIsOpen}
      />
    </section>
  )
}

'use client'

import {Text, Title} from '@/shared/ui'
import styles from './Peculiarity.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {useState} from 'react'
import Image, {type StaticImageData} from 'next/image'
import galleryImage1 from '@/shared/assets/images/home2.png'
import galleryImage2 from '@/shared/assets/images/ourProject1.png'
import galleryImage3 from '@/shared/assets/images/park.png'
import galleryImage4 from '@/shared/assets/images/ourProject2.png'
import galleryImage5 from '@/shared/assets/images/historyItemImage.png'
import galleryImage6 from '@/shared/assets/images/street.png'
import {TitleCarousel} from '@/entities/title-carousel'
import {Gallery} from '../gallery/Gallery'

interface PeculiarityGalleryProps {
  title: string
  description: string
  images: StaticImageData[]
}

const MOCK_PECULIARITY = [
  {
    id: 1,
    title: 'Инфраструктура',
    infoTitle: 'Социальная инфраструктура',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
  {
    id: 2,
    title: 'Локация',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage4},
      {id: 2, src: galleryImage5},
      {id: 3, src: galleryImage6},
    ],
  },
  {
    id: 3,
    title: 'Архитектура',
    infoTitle: 'Архитектура',
    infoDescription:
      'Высотные башни-доминанты с видовыми квартирами, дома пониже, растворяющиеся в спокойствии внутренних двориков, малоэтажные камерные таунхаусы и разноэтажные дома с лоджиями на первой береговой линии соединяются в одно эстетичное современное произведение. В результате создаётся насыщенное идентичное пространство, подчёркнутое плавностью природных форм, наполненное светом, воздухом и свободой.',
    images: [
      {id: 1, src: galleryImage4},
      {id: 2, src: galleryImage5},
      {id: 3, src: galleryImage6},
    ],
  },
  {
    id: 4,
    title: 'Планировка',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
  {
    id: 5,
    title: 'Умные системы',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
  {
    id: 6,
    title: 'Лобби',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
  {
    id: 7,
    title: 'Подземный паркинг',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
  {
    id: 8,
    title: 'Благоустройство',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
  {
    id: 9,
    title: 'Инженерия',
    infoTitle: 'Квартиры с террасой',
    infoDescription:
      'Двухуровневая 5-комнатная квартира с открытой террасой идеально подойдет большой семье, а также тем, кому нужен домашний офис или творческая студия — каждый уровень имеет отдельный вход. Единственная на этаже, такая квартира создает ощущение частного загородного дома.',
    images: [
      {id: 1, src: galleryImage1},
      {id: 2, src: galleryImage2},
      {id: 3, src: galleryImage3},
    ],
  },
]

const PeculiarityGallery = ({
  title,
  description,
  images,
}: PeculiarityGalleryProps) => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.topContent}>
        <div className={styles.infoContainer}>
          <Text size='sMedium' weight='bold'>
            {title}
          </Text>
          <Text>{description}</Text>
        </div>
        <div className={styles.image}>
          <Image
            src={images[0].src}
            className={styles.image}
            alt='gallery-image'
            fill
            sizes='100%'
          />
        </div>
        <Gallery images={images} className={styles.gallery} isPadding />
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.image}>
          <Image
            src={images[1].src}
            className={styles.image}
            alt='gallery-image'
            fill
            sizes='100%'
          />
        </div>
        <div className={styles.image}>
          <Image
            src={images[2].src}
            className={styles.image}
            alt='gallery-image'
            fill
            sizes='100%'
          />
        </div>
      </div>
    </div>
  )
}

export function Peculiarity() {
  const [titleActive, setTitleActive] = useState(1)
  const itemDataFilter = MOCK_PECULIARITY[titleActive - 1]

  return (
    <section className={styles.container}>
      <div className={themeStyles.container}>
        <Title>Особенности</Title>
        <TitleCarousel
          titleActive={titleActive}
          changeTitleActive={setTitleActive}
          data={MOCK_PECULIARITY}
        />
        <PeculiarityGallery
          title={itemDataFilter.infoTitle}
          description={itemDataFilter.infoDescription}
          images={itemDataFilter.images}
        />
      </div>
    </section>
  )
}

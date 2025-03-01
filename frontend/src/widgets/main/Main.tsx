'use client'

import {motion} from 'framer-motion'
import {Button, MainTitle} from '@/shared/ui'
import styles from './Main.module.css'
import {theme} from '@/shared/model'
import objectImage from '@/shared/assets/images/objects/9bfc46453fa2661e9489550ebef3c5472e643e20.jpeg'
import objectImage2 from '@/shared/assets/images/objects/dvor01_01_fin_1080__1jfuy9e.jpg'
import objectImage3 from '@/shared/assets/images/objects/i.webp'
import objectImage4 from '@/shared/assets/images/objects/optimize.webp'
import {Gallery} from '../gallery/Gallery'

const MOCK_IMAGES = [
  {
    id: 1,
    title: 'Shagal',
    description: 'бизнес-квартал у реки',
    src: objectImage,
  },
  {
    id: 2,
    title: 'Mariinn',
    description: 'квартиры на садовом',
    src: objectImage2,
  },
  {
    id: 3,
    title: 'Rauta',
    description: 'камерный проект премиум-класса',
    src: objectImage3,
  },
  {
    id: 4,
    title: 'Voxhall',
    description: 'квартиры на Садовом',
    src: objectImage4,
  },
]

export function Main() {
  return (
    <motion.section
      className={`${styles.container}`}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
    >
      <Gallery images={MOCK_IMAGES} />
      <div className={styles.rightContainer}>
        <MainTitle animation={theme.animations.opacityAndMoveX}>
          Уют и удобство в каждом квадратном метре
        </MainTitle>
        <Button
          href='/apartments2'
          textColor='white'
          animation={theme.animations.opacityAndMoveX}
          className={styles.button}
        >
          Выбрать квартиру
        </Button>
      </div>
    </motion.section>
  )
}

'use client'

import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {Text, Icon} from '@/shared/ui'
import styles from './Gallery.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {theme} from '@/shared/model'

const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.7,
  },
}

export function Gallery({images, isMax}) {
  const previewContainer = useRef<HTMLUListElement>(null)
  const [activeId, setActiveId] = useState(1)

  const MAX_WIDTH = () => {
    if (isMax) {
      return innerWidth
    }
    if (innerWidth > 940) {
      return (innerWidth * 56) / 100
    }
    return innerWidth
  }

  const handleNext = () => {
    if (activeId !== images.length) return setActiveId((prev) => prev + 1)
    if (activeId === images.length) setActiveId(1)
  }

  const handlePrev = () => {
    if (activeId !== 1) return setActiveId((prev) => prev - 1)
    if (activeId === 1) setActiveId(images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeId !== images.length) setActiveId((prev) => prev + 1)
      if (activeId === images.length) setActiveId(1)
    }, 4000)

    return () => clearInterval(interval)
  }, [activeId, images.length])

  useEffect(() => {
    if (!previewContainer.current) {
      return
    }

    if (activeId === 1) {
      previewContainer.current.style.transform = `translate3d(0, 0, 0)`
      return
    }

    if (activeId > 1) {
      previewContainer.current.style.transform = `translate3d(-${MAX_WIDTH() * (activeId - 1)}px, 0, 0)`
      return
    }
  }, [activeId])

  return (
    <div className={styles.galleryContainer}>
      <ul className={styles.listContent} ref={previewContainer}>
        {images.map((item) => (
          <div className={styles.image} key={item.id}>
            <Image
              className={styles.image}
              alt='main-image'
              src={item.src}
              fill
              sizes='100%'
            />
            {!isMax && (
              <div className={styles.titleContainer}>
                <Text
                  color='white'
                  weight='bold'
                  animation={theme.animations.opacity}
                  size='sLarge'
                >
                  {item.title}
                </Text>
                <Text
                  weight='medium'
                  color='white'
                  size='small'
                  animation={opacityAnimation}
                >
                  {item.description}
                </Text>
              </div>
            )}
            <div className={styles.background} />
          </div>
        ))}
      </ul>
      <motion.div
        className={styles.arrowLeft}
        variants={theme.animations.opacity}
        onClick={() => handlePrev()}
      >
        <Icon
          name='arrow'
          size={12}
          className={styles.arrow}
          color='greyDark'
        />
      </motion.div>
      <div className={`${themeStyles.container} ${styles.listContainer}`}>
        {isMax && (
          <Text
            size='large'
            weight='bold'
            color='white'
            className={styles.listTitle}
          >
            Shagal
          </Text>
        )}
        <motion.ul
          className={isMax ? styles.listLeftMax : styles.listLeft}
          variants={theme.animations.opacity}
        >
          {images.map((item) => (
            <li
              className={`${item.id === activeId ? styles.listItemActive : styles.listItem}`}
              onClick={() => setActiveId(item.id)}
              key={item.id}
            />
          ))}
        </motion.ul>
      </div>
      <motion.div
        className={styles.arrowRight}
        variants={theme.animations.opacity}
        onClick={() => handleNext()}
      >
        <Icon name='arrow' size={12} color='greyDark' />
      </motion.div>
    </div>
  )
}

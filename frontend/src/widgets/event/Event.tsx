'use client'

import {Button, Text} from '@/shared/ui'
import {motion} from 'framer-motion'
import styles from './Event.module.css'
import newsImage from '@/shared/assets/images/ourProject3.png'
import Image from 'next/image'

interface EventProps {
  title: string
  description: string
  period: string
  delay: number
}

export function Event({title, description, period, delay}: EventProps) {
  return (
    <motion.div
      className={styles.container}
      variants={{
        hidden: {
          x: -50,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: delay,
          },
        },
      }}
    >
      <div className={styles.status}>
        <Text color='white'>до {period}</Text>
      </div>
      <div className={styles.content}>
        <Text color='white' size='sMedium' weight='bold'>
          {title}
        </Text>
        <Text color='white'>{description}</Text>
      </div>
      <Button className={styles.button} href='/events/event'>
        Перейти
      </Button>
      <div className={styles.backGround} />
      <Image
        className={styles.image}
        src={newsImage}
        alt='news-image'
        fill
        sizes='100%'
      />
    </motion.div>
  )
}

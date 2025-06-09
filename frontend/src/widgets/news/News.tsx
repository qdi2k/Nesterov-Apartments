'use client'

import styles from './News.module.css'
import {Text} from '@/shared/ui'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface NewsProps {
  date: string
  title: string
  description: string
  className?: string
}

export function News({date, title, description, className, delay}: NewsProps) {
  return (
    <motion.div
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
      <div className={`${styles.newsItem} ${className}`}>
        <Text color='grey'>{date}</Text>
        <Text size='sMedium' weight='bold'>
          {title}
        </Text>
        <Text>{description}</Text>
        <Link href='/news-item'>
          <Text color='orange' className={styles.link}>
            Подробнее
          </Text>
        </Link>
      </div>
    </motion.div>
  )
}

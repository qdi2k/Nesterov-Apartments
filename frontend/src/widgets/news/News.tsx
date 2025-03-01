import styles from './News.module.css'
import {Text} from '@/shared/ui'
import Link from 'next/link'

interface NewsProps {
  date: string
  title: string
  description: string
  className?: string
}

export function News({date, title, description, className}: NewsProps) {
  return (
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
  )
}

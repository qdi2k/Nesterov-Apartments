'use client'

import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './NewsPage.module.css'
import {Button, Skeleton, Title} from '@/shared/ui'
import {News} from '@/widgets/news'
import {useEffect, useState} from 'react'
import news from '@/shared/assets/mockData/news/news.json'
import useGetMoreItem from '@/shared/model/useGetMoreItem'

const NewsSkeleton = () => {
  return (
    <div className={styles.newsContainerSkeleton}>
      <div className={styles.skeletonContent}>
        <Skeleton width='18%' height='30px' />
        <Skeleton width='100%' height='30px' />
        <Skeleton width='100%' height='30px' />
        <Skeleton width='12%' height='30px' />
      </div>
    </div>
  )
}

export function NewsPage() {
  const [isLoading, setIsLoading] = useState(true)

  const {handleShowMoreItems, getDelay, dataToShow} = useGetMoreItem(
    news.news,
    5
  )

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])
  return (
    <div className={`${themeStyles.container} ${styles.container}`}>
      <Title>Новости</Title>
      <div className={styles.newsContainer}>
        {isLoading ? (
          <>
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
          </>
        ) : (
          <>
            {dataToShow.map((item, index) => (
              <News
                key={item.id}
                date={item.date}
                title={item.title}
                description={item.description}
                delay={getDelay(index)}
              />
            ))}
            {news.news.length > dataToShow.length && (
              <Button
                onClick={handleShowMoreItems}
                isMore
                className={styles.moreButton}
                animation={{
                  hidden: {
                    y: 50,
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: 0.6,
                    },
                  },
                }}
              >
                Показать ещё
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

'use client'

import {Title, Text, SubstrateButton} from '@/shared/ui'
import styles from './Architecture.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import main1Image from '@/shared/assets/images/main1.jpg'
import main2Image from '@/shared/assets/images/apartment.png'
import main3Image from '@/shared/assets/images/main3.jpg'
import main4Image from '@/shared/assets/images/main4.webp'
import main5Image from '@/shared/assets/images/main5.webp'

const ARCHITECTURE_LIST = [
  {
    id: 1,
    title: 'Современная архитектура',
    imageTitle: 'Архитектура',
    imageDescription:
      'Каждый фасад продуман до мелочей, создавая гармонию с городским ландшафтом и подчеркивая статусность жилья',
    imageUrl: main1Image,
  },
  {
    id: 2,
    title: 'Органичные планировки',
    imageTitle: 'Планировка',
    imageDescription:
      'Каждая деталь интерьера создана для комфорта и уюта, чтобы жильцы могли наслаждаться каждым моментом',
    imageUrl: main2Image,
  },
  {
    id: 3,
    title: 'Подземный паркинг',
    imageTitle: 'Паркинг',
    imageDescription:
      'Больше не нужно переживать о сохранности автомобиля и искать место для парковки',
    imageUrl: main3Image,
  },
  {
    id: 4,
    title: 'Закрытый двор',
    imageTitle: 'Двор',
    imageDescription:
      'Дворы без машин, с детскими площадками, зонами отдыха и прогулочными дорожками, где можно наслаждаться тишиной и спокойствием',
    imageUrl: main4Image,
  },
  {
    id: 5,
    title: 'Собственный сквер',
    imageTitle: 'Сквер',
    imageDescription:
      'Идеальное место для прогулок, занятий спортом или отдыха на свежем воздухе в любое время года',
    imageUrl: main5Image,
  },
]

export function Architecture() {
  const [activeId, setActiveId] = useState(1)
  const router = useRouter()

  const handleListClick = (id: number) => {
    setActiveId(id)
  }

  const navigateToSection = (sectionId: string) => {
    router.push(`/rules?section=${sectionId}`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeId !== ARCHITECTURE_LIST.length) setActiveId((prev) => prev + 1)
      if (activeId === ARCHITECTURE_LIST.length) setActiveId(1)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeId])

  return (
    <section className={styles.container}>
      <div className={themeStyles.container}>
        <div className={styles.test}>
          <div className={styles.contentContainer}>
            <Title className={styles.title}>Почему ЖК Nesterov?</Title>
            <ul className={styles.listContainer}>
              {ARCHITECTURE_LIST.map((item) => (
                <li key={item.id} onClick={() => handleListClick(item.id)}>
                  <Text
                    size='sMedium'
                    className={styles.listText}
                    weight={activeId === item.id ? 'bold' : 'regular'}
                    color={activeId === item.id ? 'orange' : 'black'}
                  >
                    {item.title}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.leftContent}>
            <div className={styles.imageContainer}>
              <Image
                src={ARCHITECTURE_LIST[activeId - 1].imageUrl}
                fill
                alt='image-gallery'
                className={styles.imageContainer}
              />
              <div className={styles.textContainer}>
                <Text className={styles.imageTitle} size='sMedium'>
                  {ARCHITECTURE_LIST[activeId - 1].imageTitle}
                </Text>
                <Text>{ARCHITECTURE_LIST[activeId - 1].imageDescription}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

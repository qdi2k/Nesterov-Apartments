'use client'

import {Title, Text, SubstrateButton} from '@/shared/ui'
import styles from './Architecture.module.css'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

const ARCHITECTURE_LIST = [
  {
    id: 1,
    title: 'Современная архитектура',
    imageTitle: 'Архитектура',
    imageDescription:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
    imageUrl: '../../shared/assets/images/second.png',
  },
  {
    id: 2,
    title: 'Органичные планировки',
    imageTitle: 'Планировка',
    imageDescription: 'Мы предоставляем органичную планировку квартиры',
    imageUrl: '../../shared/assets/images/second.png',
  },
  {
    id: 3,
    title: 'Подземный паркинг',
    imageTitle: 'Паркинг',
    imageDescription:
      'Мы предоставляем органичную планировку квартиры Мы предоставляем органичную планировку квартиры',
    imageUrl: '../../shared/assets/images/second.png',
  },
  {
    id: 4,
    title: 'Закрытый двор',
    imageTitle: 'Двор',
    imageDescription:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
    imageUrl: '../../shared/assets/images/second.png',
  },
  {
    id: 5,
    title: 'Собственный сквер',
    imageTitle: 'Сквер',
    imageDescription:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
    imageUrl: '../../shared/assets/images/second.png',
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
    <section>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.imageContainer}>
            <div className={styles.textContainer}>
              <Text className={styles.imageTitle} size='sMedium'>
                {ARCHITECTURE_LIST[activeId - 1].imageTitle}
              </Text>
              <Text>{ARCHITECTURE_LIST[activeId - 1].imageDescription}</Text>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <Title className={styles.title}>
            Почему <br /> ЖК Nesterov?
          </Title>
          <ul className={styles.listContainer}>
            {ARCHITECTURE_LIST.map((item) => (
              <li key={item.id} onClick={() => handleListClick(item.id)}>
                <Text
                  size='sMedium'
                  className={styles.listText}
                  weight={activeId === item.id ? 'bold' : 'regular'}
                  color={activeId === item.id ? 'brown' : 'black'}
                >
                  {item.title}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SubstrateButton
        classNameBackground={styles.substrateButtonBackground}
        classNameContent={styles.substrateButtonContent}
        classNameTitle={styles.substrateButtonTitle}
        onClick={() => navigateToSection('calculator')}
        textButton='А с ремонтом'
      >
        Стоимость квартиры легко рассчитать с помощью нашего калькулятора
      </SubstrateButton>
    </section>
  )
}

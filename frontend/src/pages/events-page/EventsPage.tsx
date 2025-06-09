'use client'

import {Button, Title} from '@/shared/ui'
import styles from './EventsPage.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {motion} from 'framer-motion'
import {Event} from '@/widgets/event'
import useGetMoreItem from '@/shared/model/useGetMoreItem'

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Скидки до 20%',
    description: 'Специальное предложение.',
    period: '31.03.2025',
  },
  {
    id: 2,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
    period: '31.03.2025',
  },
  {
    id: 3,
    title: 'Скидки до 20%',
    description: 'Специальное предложение.',
    period: '31.03.2025',
  },
  {
    id: 4,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
    period: '31.03.2025',
  },
  {
    id: 5,
    title: 'Двойная выгода на апартаменты',
    description:
      'Воспользуйтесь уникальным предложением на апартаменты по программе “Двойная выгода” на апартаменты в VOXHALL.',
    period: '31.03.2025',
  },
  {
    id: 6,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
    period: '31.03.2025',
  },
  {
    id: 7,
    title: 'Скидки до 20%',
    description: 'Специальное предложение.',
    period: '31.03.2025',
  },
  {
    id: 8,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
    period: '31.03.2025',
  },
]

export function EventsPage() {
  const {handleShowMoreItems, getDelay, dataToShow} = useGetMoreItem(
    MOCK_EVENTS,
    6
  )
  return (
    <motion.section
      className={styles.container}
      initial='hidden'
      animate='visible'
      viewport={{once: true}}
    >
      <div className={themeStyles.container}>
        <Title>Все акции и скидки</Title>
        <div className={styles.eventsContainer}>
          {dataToShow.map((event, index) => (
            <Event
              key={event.id}
              title={event.title}
              description={event.description}
              period={event.period}
              delay={getDelay(index)}
            />
          ))}
        </div>
        {MOCK_EVENTS.length > dataToShow.length && (
          <Button
            onClick={handleShowMoreItems}
            isMore
            className={styles.button}
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
      </div>
    </motion.section>
  )
}

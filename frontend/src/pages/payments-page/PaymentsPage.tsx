'use client'

import {Button, Title} from '@/shared/ui'
import styles from './PaymentsPage.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {motion} from 'framer-motion'
import useGetMoreItem from '@/shared/model/useGetMoreItem'
import {Payment} from '@/widgets/payment'

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Скидки до 20%',
    description: 'Специальное предложение.',
  },
  {
    id: 2,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
  },
  {
    id: 3,
    title: 'Скидки до 20%',
    description: 'Специальное предложение.',
  },
  {
    id: 4,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
  },
  {
    id: 5,
    title: 'Двойная выгода на апартаменты',
    description:
      'Воспользуйтесь уникальным предложением на апартаменты по программе “Двойная выгода” на апартаменты в VOXHALL.',
  },
  {
    id: 6,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
  },
  {
    id: 7,
    title: 'Скидки до 20%',
    description: 'Специальное предложение.',
  },
  {
    id: 8,
    title: 'Рассрочка без платежей',
    description: '5% первый взнос',
  },
]

export function PaymentsPage() {
  const {handleShowMoreDocuments, getDelay, postsToShow} = useGetMoreItem(
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
        <Title>Все способы оплаты</Title>
        <div className={styles.eventsContainer}>
          {postsToShow.map((event) => (
            <Payment
              key={event.id}
              title={event.title}
              description={event.description}
              delay={getDelay(event.id)}
            />
          ))}
        </div>
        {MOCK_EVENTS.length > postsToShow.length && (
          <Button
            onClick={handleShowMoreDocuments}
            isMore
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

'use client'

import {Button, Text, Title} from '@/shared/ui'
import styles from './PaymentPage.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import eventImage from '@/shared/assets/images/ourProject3.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {Event} from '@/widgets/event'
import useGetMoreItem from '@/shared/model/useGetMoreItem'
import {Payment} from '@/widgets/payment'

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

export function PaymentPage() {
  const {handleShowMoreItems, getDelay, dataToShow} = useGetMoreItem(
    MOCK_EVENTS,
    6
  )
  return (
    <section>
      <div className={themeStyles.container}>
        <div className={styles.eventContent}>
          <Title className={styles.title}>Материнский капитал</Title>
          <div className={styles.image}>
            <Image
              className={styles.image}
              src={eventImage}
              alt='news-image'
              fill
              sizes='100%'
            />
          </div>
          <div>
            <Text>
              Воспользуйтесь уникальным предложением на апартаменты по программе
              “Двойная выгода” на апартаменты в VOXHALL.
            </Text>
            <Text>
              Предложение ограничено. Успейте выбрать и приобрести на выгодных
              условиях самый комфортный вариант! Подробности уточняйте в офисе
              продаж.
            </Text>
          </div>
          <Button className={styles.button}>Оставить заявку</Button>
        </div>
      </div>
      <motion.div
        className={styles.moreEvents}
        initial='hidden'
        animate='visible'
        viewport={{once: true}}
      >
        <div className={themeStyles.container}>
          <Title>Другие способы оплаты</Title>
          <div className={styles.eventsContainer}>
            {dataToShow.map((event, index) => (
              <Payment
                key={event.id}
                title={event.title}
                description={event.description}
                delay={getDelay(index)}
              />
            ))}
          </div>
          {MOCK_EVENTS.length > dataToShow.length && (
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
        </div>
      </motion.div>
    </section>
  )
}

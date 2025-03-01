'use client'

import {Icon, Text, Title} from '@/shared/ui'
import styles from './Questions.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {theme} from '@/shared/model'

interface QuestionProps {
  question: string
  answer: string
  id: number
}

const MOCK_QUESTIONS = [
  {
    id: 1,
    question: 'Какие варианты планировок доступны в ЖК?',
    answer:
      'В нашем ЖК представлены квартиры с одно-, двух- и трехкомнатными планировками. Все квартиры спроектированы с учетом современных стандартов комфорта и функциональности.',
  },
  {
    id: 2,
    question: 'Есть ли в ЖК подземный паркинг?',
    answer:
      'Да, в ЖК предусмотрен подземный паркинг с удобными въездами и выездами, системой видеонаблюдения и широкими парковочными местами.',
  },
  {
    id: 3,
    question: 'Есть ли в ЖК услуга управления имуществом?',
    answer:
      'Да, в ЖК работает профессиональная управляющая компания, которая занимается обслуживанием территории, уборкой, ремонтом и другими вопросами.',
  },
  {
    id: 4,
    question: 'Есть ли в ЖК зоны для отдыха и занятий спортом?',
    answer:
      'Да, на территории ЖК есть благоустроенный сквер, детские площадки, зоны для пикников и спортивные площадки для активного отдыха.',
  },
  {
    id: 5,
    question: 'Можно ли оформить ипотеку на покупку квартиры в ЖК?',
    answer:
      'Да, мы сотрудничаем с ведущими банками, что позволяет нашим клиентам оформить ипотеку на выгодных условиях.',
  },
  {
    id: 6,
    question: 'Можно ли посетить ЖК и посмотреть квартиры?',
    answer:
      'Да, мы организуем экскурсии по ЖК и показы квартир. Свяжитесь с нашим менеджером, чтобы записаться на удобное время.',
  },
]

const Question = ({question, answer, id}: QuestionProps) => {
  const [status, setStatus] = useState(false)
  return (
    <motion.div
      className={styles.questionItemContainer}
      variants={{
        hidden: {
          y: 50,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: id * 0.1,
          },
        },
      }}
      onClick={() => setStatus(!status)}
    >
      <div className={styles.questionTitle}>
        <Text size='xSmall' weight='semiBold'>
          {question}
        </Text>
        <Icon
          name='close'
          size={20}
          className={`${styles.icon} ${status && styles.iconRotate}`}
        />
      </div>
      <AnimatePresence>
        {status && (
          <Text
            className={styles.answer}
            initialAnimation={{height: 0, opacity: 0}}
            animate={{
              height: 'auto',
              opacity: 1,
              marginBottom: 16,
              transition: {
                height: {duration: 0.4},
                opacity: {duration: 0.25, delay: 0.15},
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              marginBottom: 0,
              transition: {
                height: {duration: 0.4},
                opacity: {duration: 0.25},
              },
            }}
          >
            {answer}
          </Text>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Questions() {
  return (
    <motion.section
      className={`${themeStyles.container} ${styles.container}`}
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.4, once: true}}
    >
      <Title animation={theme.animations.opacity}>
        Часто задаваемые вопросы
      </Title>
      <div className={styles.questionsContainer}>
        {MOCK_QUESTIONS.map((question) => (
          <Question
            key={question.id}
            question={question.question}
            answer={question.answer}
            id={question.id}
          />
        ))}
      </div>
    </motion.section>
  )
}

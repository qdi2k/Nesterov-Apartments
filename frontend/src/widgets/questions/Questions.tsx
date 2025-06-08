'use client'

import {Icon, Text, Title} from '@/shared/ui'
import styles from './Questions.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import questions from '@/shared/assets/mockData/questions/questions.json'
import {theme} from '@/shared/model'

interface QuestionProps {
  question: string
  answer: string
  id: number
}

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
        {questions.questions.map((question) => (
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

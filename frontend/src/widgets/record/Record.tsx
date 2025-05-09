'use client'

import {Button, Checkbox, Input, Text, Title} from '@/shared/ui'
import styles from './Record.module.css'
import {motion} from 'framer-motion'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image from 'next/image'
import recordImage from '@/shared/assets/images/record.png'
import {theme} from '@/shared/model'
import {useState} from 'react'

export function Record() {
  const [isCheck, setIsCheck] = useState(false)
  const [isCheckSecond, setIsCheckSecond] = useState(false)
  return (
    <motion.section
      className={styles.container}
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.6, once: true}}
    >
      <div className={`${themeStyles.container} ${styles.recordContainer}`}>
        <motion.div
          className={styles.formContainer}
          variants={theme.animations.opacity}
        >
          <div className={styles.titleContainer}>
            <Title className={styles.title}>Остались вопросы?</Title>
            <Text weight='medium'>
              Оставьте заявку, и наш менеджер свяжется с вами в ближаейшее время
            </Text>
          </div>
          <div className={styles.form}>
            <Input placeholder='Ваше имя' />
            <Input placeholder='Ваш email / телефон' />
            <Checkbox isChecked={isCheck} onChange={() => setIsCheck(!isCheck)}>
              <Text>
                Даю <span className={styles.approve}>согласие</span> на
                обработку персональных данных.
              </Text>
            </Checkbox>
            <Checkbox
              isChecked={isCheckSecond}
              onChange={() => setIsCheckSecond(!isCheckSecond)}
            >
              <Text>
                Даю <span className={styles.approve}>согласие</span> на
                получение рекламных предложений.
              </Text>
            </Checkbox>
            <Button className={styles.formButton}>Оставить заявку</Button>
          </div>
        </motion.div>
        <div className={styles.image}>
          <Image
            className={styles.image}
            src={recordImage}
            alt='record'
            fill
            sizes='100%'
          ></Image>
        </div>
      </div>
    </motion.section>
  )
}

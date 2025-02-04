'use client'

import {Icon, MainTitle, Text} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './ProjectInfo.module.css'
import Image from 'next/image'

export function ProjectInfo() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <MainTitle>О проекте</MainTitle>
      <div className={styles.contentContainer}>
        <div>
          <Text weight='light'>
            Таким образом рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации позиций, занимаемых участниками. Таким
            образом рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации позиций, занимаемых участниками.
          </Text>
          <ul className={styles.listContainer}>
            <li className={styles.listItem}>
              <Icon name='architect' size={54} />
              <Text size='sMedium'>Современная архитектура</Text>
              <div className={styles.circle} />
            </li>
            <li className={styles.listItem}>
              <Icon name='floor' size={54} />
              <Text size='sMedium'>Органичные планировки</Text>
              <div className={styles.circle} />
            </li>
            <li className={styles.listItem}>
              <Icon name='parking' size={54} />
              <Text size='sMedium'>Подземный паркинг</Text>
              <div className={styles.circle} />
            </li>
            <li className={styles.listItem}>
              <Icon name='cascade' size={54} />
              <Text size='sMedium'>Закрытый двор</Text>
              <div className={styles.circle} />
            </li>
          </ul>
        </div>
        <Image
          className={styles.image}
          src={require('../../shared/assets/images/project.png')}
          alt='vtb'
          height={597}
          width={789}
        />
      </div>
    </section>
  )
}

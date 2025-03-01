'use client'

import {Icon, MainTitle, Text} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './ProjectInfo.module.css'
import Image from 'next/image'
import projectInfoImage from '@/shared/assets/images/project.png'

export function ProjectInfo() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <MainTitle>О проекте</MainTitle>
      <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <Text weight='light'>
            Здесь сочетаются стильная архитектура, продуманные планировки и
            благоустроенная территория с зелеными зонами. Проект предлагает не
            просто квартиры, а полноценное пространство для жизни, где каждая
            деталь направлена на создание уюта и удобства. Рядом развитая
            инфраструктура, удобная транспортная доступность и всё, что нужно
            для повседневной жизни. Это место, где мечты о современном жилье
            становятся реальностью.
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
        <div className={styles.image}>
          <Image
            className={styles.image}
            src={projectInfoImage}
            alt='project-image'
            fill
          />
        </div>
      </div>
    </section>
  )
}

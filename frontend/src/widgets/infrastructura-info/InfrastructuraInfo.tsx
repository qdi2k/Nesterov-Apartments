import {Icon, MainTitle, Text} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './InfrastructuraInfo.module.css'
import infrastructuraImage from '@/shared/assets/images/second.png'
import Image from 'next/image'

export function InfrastructuraInfo() {
  return (
    <section className={themeStyles.container}>
      <MainTitle className={styles.test}>Инфраструктура</MainTitle>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <Text className={styles.description} weight='light'>
            Таким образом рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации позиций, занимаемых участниками. Таким
            образом рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации позиций, занимаемых участниками.
          </Text>
          <ul>
            <li className={styles.listItem}>
              <Icon name='map' className={styles.icon} />
              <Text className={styles.listTitle} size='sMedium' weight='light'>
                Месторасположение
              </Text>
            </li>
            <li className={styles.listItem}>
              <Icon name='train' className={styles.icon} />
              <Text className={styles.listTitle} size='sMedium' weight='light'>
                Удобная транспортная развязка
              </Text>
            </li>
            <li className={styles.listItem}>
              <Icon name='appartment' className={styles.icon} />
              <Text className={styles.listTitle} size='sMedium' weight='light'>
                Развитая инфраструктура
              </Text>
            </li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image
            src={infrastructuraImage}
            alt='infrastructura-image'
            className={styles.image}
            fill
          />
        </div>
      </div>
    </section>
  )
}

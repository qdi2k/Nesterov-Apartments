import {Icon, MainTitle, Text} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './InfrastructuraInfo.module.css'

export function InfrastructuraInfo() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <div className={styles.contentContainer}>
        <MainTitle>Инфраструктура</MainTitle>
        <Text className={styles.description} weight='light'>
          Таким образом рамки и место обучения кадров влечет за собой процесс
          внедрения и модернизации позиций, занимаемых участниками. Таким
          образом рамки и место обучения кадров влечет за собой процесс
          внедрения и модернизации позиций, занимаемых участниками.
        </Text>
        <ul>
          <li className={styles.listItem}>
            <Icon name='map' size={150} />
            <Text className={styles.listTitle} size='xMedium' weight='light'>
              Месторасположение
            </Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='train' size={150} />
            <Text className={styles.listTitle} size='xMedium' weight='light'>
              Удобная транспортная развязка
            </Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='appartment' size={150} />
            <Text className={styles.listTitle} size='xMedium' weight='light'>
              Развитая инфраструктура
            </Text>
          </li>
        </ul>
      </div>
      <div className={styles.image} />
    </section>
  )
}

import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './InfrastructuraMap.module.css'
import {Button, Icon, Text, Title} from '@/shared/ui'

export function InfrastructuraMap() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <div className={styles.content}>
        <Title>Все нужное рядом</Title>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <Icon name='shop' size={58} />
            <Text>Магазин</Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='school' size={58} />
            <Text>Школа, детский сад</Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='cafe' size={58} />
            <Text>Ресторан, кафе</Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='hospital' size={58} />
            <Text>Медицинское учреждение</Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='transport' size={58} />
            <Text>Остановка транспорта</Text>
          </li>
          <li className={styles.listItem}>
            <Icon name='park' size={58} />
            <Text>Парк, детская площадка</Text>
          </li>
        </ul>
        <Button>Выбрать квартиру</Button>
      </div>
      <div className={styles.image} />
    </section>
  )
}

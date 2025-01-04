import {Button, Icon, MainTitle, Text} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './RouteMap.module.css'
import {RouteMap} from './RouteMap'

export function ContactsMap() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <div>
        <MainTitle>Контакты</MainTitle>
        <div className={styles.contactsMapContainer}>
          <Text size='xMedium' weight='light' color='brown' isUppercase>
            Офис продаж
          </Text>
          <ul className={styles.listContent}>
            <li className={styles.listItem}>
              <Icon name='mapFill' color='orange' size={24} />
              <Text weight='light'>Красноярск, ул. Кульнева, д. 3, стр. 1</Text>
            </li>
            <li className={styles.listItem}>
              <Icon name='timeFill' color='orange' size={24} />
              <Text weight='light'>пн-пт 9:00 - 18:00</Text>
            </li>
            <li className={styles.listItem}>
              <Icon name='phoneFill' color='orange' size={24} />
              <Text weight='light'>
                +7 495 419-15-18 — Менеджер по продажам
              </Text>
            </li>
            <li className={styles.listItem}>
              <Icon name='phoneFill' color='orange' size={24} />
              <Text weight='light'>+7 495 419-15-18 — Запись на эксукрсию</Text>
            </li>
            <li className={styles.listItem}>
              <Icon name='mailFill' color='orange' size={24} />
              <Text weight='light'>info@nesterov.ru</Text>
            </li>
          </ul>
          <Button>Задать вопрос</Button>
        </div>
      </div>
      <RouteMap />
    </section>
  )
}

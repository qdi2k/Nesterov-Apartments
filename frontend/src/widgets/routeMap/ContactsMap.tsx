import {Icon, Text, Title} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './RouteMap.module.css'
import {RouteMap} from './RouteMap'

export function ContactsMap() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title>Офис продаж в Нижнем Новгороде</Title>
      <div className={styles.contacts}>
        <li className={styles.listItem}>
          <div className={styles.contactIcon}>
            <Icon name='mapFill' color='greyDark' size={24} />
          </div>
          <Text>
            Нижний Новгород, <br /> ул. Октябрьская, д. 4, стр. 1
          </Text>
        </li>
        <li className={styles.listItem}>
          <div className={styles.contactIcon}>
            <Icon name='timeFill' color='greyDark' size={24} />
          </div>
          <Text>
            Время работы <br /> пн-пт 9:00 - 18:00
          </Text>
        </li>
        <li className={styles.listItem}>
          <div className={styles.contactIcon}>
            <Icon
              name='phoneFill'
              color='greyDark'
              size={24}
              className={styles.iconPhone}
            />
          </div>
          <Text>
            Менеджер по продажам <br /> +7 495 419-15-18
          </Text>
        </li>
        <li className={styles.listItem}>
          <div className={styles.contactIcon}>
            <Icon name='mailFill' color='greyDark' size={24} />
          </div>
          <Text>
            Почта <br /> info@nesterov.ru
          </Text>
        </li>
      </div>
      <RouteMap />
    </section>
  )
}

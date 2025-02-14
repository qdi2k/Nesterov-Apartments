import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './InfrastructuraMap.module.css'
import {Button, Icon, Text, Title} from '@/shared/ui'
import Image from 'next/image'
import fullMapImage from '@/shared/assets/images/fullMap.png'
import {type IconName} from '@/shared/ui/icon/Icon'

const LIST_DATA = [
  {
    id: 1,
    title: 'Магазин',
    icon: 'shop',
  },
  {
    id: 2,
    title: 'Школа, детский сад',
    icon: 'school',
  },
  {
    id: 3,
    title: 'Ресторан, кафе',
    icon: 'cafe',
  },
  {
    id: 4,
    title: 'Медицинское учреждение',
    icon: 'hospital',
  },
  {
    id: 5,
    title: 'Остановка транспорта',
    icon: 'transport',
  },
  {
    id: 6,
    title: 'Парк, детская площадка',
    icon: 'park',
  },
]

export function InfrastructuraMap() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <div className={styles.title}>
        <Title>Все</Title>
        <Title>нужное рядом</Title>
      </div>
      <ul className={styles.listContainer}>
        {LIST_DATA.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <Icon
              name={item.icon as IconName}
              size={58}
              className={styles.icon}
            />
            <Text>{item.title}</Text>
          </li>
        ))}
      </ul>
      <Button className={styles.button} href='/apartments'>
        Выбрать квартиру
      </Button>
      <div className={styles.image}>
        <Image
          src={fullMapImage}
          className={styles.image}
          alt='full-map'
          fill
        />
      </div>
    </section>
  )
}

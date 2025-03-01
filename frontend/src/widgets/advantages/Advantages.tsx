import {Title, Advantage} from '@/shared/ui'
import styles from './Advantages.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {type IconName} from '@/shared/ui/icon/Icon'

const ADVANTAGE_DATA = [
  {
    id: 1,
    icon: 'map' as IconName,
    title: 'Месторасположение',
    description:
      'ЖК расположен в одном из самых перспективных и престижных районов города, сочетая в себе близость к центру и тишину спальных районов',
  },
  {
    id: 2,
    icon: 'train' as IconName,
    title: 'Удобная транспортная развязка',
    description:
      'Отличная транспортная доступность — рядом основные магистрали, остановки общественного транспорта и удобные выезды на ключевые дороги',
  },
  {
    id: 3,
    icon: 'appartment' as IconName,
    title: 'Развитая инфраструктура',
    description:
      'В шаговой доступности всё, что нужно для комфортной жизни: школы, детские сады, фитнес-клубы, супермаркеты, кафе и аптеки',
  },
]

export function Advantages() {
  return (
    <section className={styles.wrapper}>
      <div className={themeStyles.container}>
        <Title className={styles.title}>
          Подарите себе жизнь в лучшем месте города
        </Title>
        <Advantage data={ADVANTAGE_DATA} />
      </div>
    </section>
  )
}

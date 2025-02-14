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
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
  },
  {
    id: 2,
    icon: 'train' as IconName,
    title: 'Удобная транспортная развязка',
    description:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
  },
  {
    id: 3,
    icon: 'appartment' as IconName,
    title: 'Развитая инфраструктура',
    description:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
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

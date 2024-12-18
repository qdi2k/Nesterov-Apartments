import {Title} from '@/shared/ui'
import styles from './Advantages.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {Advantage} from '@/shared/ui/advantage'

export function Advantages() {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${themeStyles.container}`}>
        <Title className={styles.title}>
          Подарите себе <br /> жизнь в лучшем <br /> месте города
        </Title>
        <ul className={styles.listContainer}>
          <li>
            <Advantage
              icon='map'
              title='Месторасположение'
              description='Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.'
            />
          </li>
          <li>
            <Advantage
              icon='train'
              title='Удобная транспортная развязка'
              description='Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.'
            />
          </li>
          <li>
            <Advantage
              icon='appartment'
              title='Развитая инфраструктура'
              description='Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.'
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

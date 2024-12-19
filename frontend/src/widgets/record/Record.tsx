import {Title} from '@/shared/ui'
import styles from './Record.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {RecordForm} from '@/entities/recordForm'

export function Record() {
  return (
    <section className={themeStyles.container}>
      <div className={styles.container}>
        <Title>
          Будем рады ответить <br /> на все ваши вопросы
        </Title>
        <RecordForm className={styles.recordForm} />
      </div>
    </section>
  )
}

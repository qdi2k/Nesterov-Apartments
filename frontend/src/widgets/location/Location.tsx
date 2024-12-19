import {Title, Text, SubstrateButton} from '@/shared/ui'
import styles from './Location.module.css'

export function Location() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.content}>
          <Title className={styles.title}>
            Жизнь станет <br /> проще, когда все <br /> необходимое <br /> рядом
          </Title>
          <Text className={styles.description}>
            Таким образом рамки и место обучения кадров влечет за собой процесс
            внедрения и модернизации позиций, занимаемых участниками.
          </Text>
          <SubstrateButton
            className={styles.substrateButtonContainer}
            textButton='Записаться на просмотр'
          >
            Оцените удобство расположения
          </SubstrateButton>
        </div>
      </div>
    </section>
  )
}

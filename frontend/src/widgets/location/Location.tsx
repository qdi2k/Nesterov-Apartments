import {Title, Text, SubstrateButton} from '@/shared/ui'
import styles from './Location.module.css'

export function Location() {
  return (
    <section className={styles.container}>
      <div className={styles.image} />
      <div className={styles.textContainer}>
        <Title className={styles.title}>
          Жизнь станет проще, когда все{' '}
          <span className={styles.textTransfer}>необходимое</span> рядом
        </Title>
        <Text className={styles.description}>
          Таким образом рамки и место обучения кадров влечет за собой процесс
          внедрения и модернизации позиций, занимаемых участниками.
        </Text>
      </div>
      <SubstrateButton
        classNameBackground={styles.substrateBackgroundContainer}
        classNameContent={styles.substrateButtonContainer}
        classNameTitle={styles.substrateButtonTitle}
        textButton='Записаться на просмотр'
      >
        Оцените удобство расположения
      </SubstrateButton>
    </section>
  )
}

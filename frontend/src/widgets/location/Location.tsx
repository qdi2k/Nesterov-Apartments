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
          Здесь всё продумано до мелочей — от современных квартир с панорамными
          окнами до развитой инфраструктуры за порогом дома.
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

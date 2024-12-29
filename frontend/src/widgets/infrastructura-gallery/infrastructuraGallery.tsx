import {SubstrateButton, Title} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './InfrastructuraGallery.module.css'
import {Gallery} from './ui'

export function InfrastructuraGallery() {
  return (
    <section className={styles.container}>
      <div className={`${themeStyles.container} ${styles.test}`}>
        <Title className={styles.title}>
          Красота внутри
          <br /> и снаружи квартиры
        </Title>
        <Gallery />
      </div>
      <SubstrateButton
        className={styles.substrateButtonContainer}
        textButton='Записаться на просмотр'
      >
        Оцените удобство расположения
      </SubstrateButton>
    </section>
  )
}

import {SubstrateButton, Text, Title} from '@/shared/ui'
import styles from './ApartmentGallery.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'

export function ApartmentGallery() {
  return (
    <section className={styles.container}>
      <div className={themeStyles.container}>
        <Title className={styles.title}>
          Так может выглядеть
          <br />
          ваша квартира
        </Title>
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryImage1}>
              <Text
                size='sMedium'
                weight='light'
                isUppercase
                className={styles.galleryText}
              >
                Гостинная
              </Text>
            </div>
            <div className={styles.galleryImage2}>
              <Text
                size='sMedium'
                weight='light'
                isUppercase
                className={styles.galleryText}
              >
                Вид из окна
              </Text>
            </div>
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryImage3}>
              <Text
                size='sMedium'
                weight='light'
                isUppercase
                className={styles.galleryText}
              >
                Кухня
              </Text>
            </div>
            <div className={styles.galleryImage4}>
              <Text
                size='sMedium'
                weight='light'
                isUppercase
                className={styles.galleryText}
              >
                Спальня
              </Text>
            </div>
          </div>
        </div>
      </div>
      <SubstrateButton
        classNameBackground={styles.substrateButtonBackground}
        classNameContent={styles.substrateButtonContent}
        textButton='Получить'
        inputPlaceholder='Email'
      >
        Получить подборку дизайнерских решений
      </SubstrateButton>
    </section>
  )
}

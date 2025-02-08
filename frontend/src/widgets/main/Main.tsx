import {MainTitle, Text, Button} from '@/shared/ui'
import styles from './Main.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image from 'next/image'
import mainImage from '@/shared/assets/images/main.png'

export function Main() {
  return (
    <section className={styles.main}>
      <div className={`${themeStyles.container} ${styles.mainContainer}`}>
        <div className={styles.backgroundBlur}>
          <MainTitle className={styles.mainTitle}>
            Квартиры, которые{' '}
            <span className={styles.textTransfer}>подстраиваются </span>
            <br /> под ваш образ жизни
          </MainTitle>
          <div className={styles.bottomContainer}>
            <Text className={styles.description}>
              В нашем жилом комплексе ваша квартира станет пространством, где
              технологии, инфраструктура, дизайн и архитектура объединяются ради
              вашего комфорта.
            </Text>
            <Button href='/apartments'>Выбрать квартиру</Button>
          </div>
        </div>
      </div>
      <div className={styles.backgroundImage}>
        <Image
          src={mainImage}
          alt='main-img'
          className={styles.backgroundImage}
          fill
        />
      </div>
    </section>
  )
}

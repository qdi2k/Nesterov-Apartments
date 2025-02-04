import {MainTitle, Text, Button} from '@/shared/ui'
import styles from './Main.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'

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
      <img alt='main-img' className={styles.backgroundImage} />
    </section>
  )
}

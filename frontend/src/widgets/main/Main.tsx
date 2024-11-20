import Image from 'next/image'
import {MainTitle} from '@/shared/ui'
import {Text} from '@/shared/ui/text/Text'
import {Button} from '@/shared/ui/button/Buton'
import styles from './Main.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'

export function Main() {
  return (
    <section className={styles.main}>
      <div className={`${themeStyles.container} ${styles.mainContainer}`}>
        <div className={styles.backgroundBlur}>
          <MainTitle className={styles.mainTitle}>
            Квартиры, которые подстраиваются <br /> под ваш образ жизни
          </MainTitle>
          <div className={styles.bottomWrapper}>
            <div className={styles.bottomContainer}>
              <Text>
                В нашем жилом комплексе ваша квартира станет пространством, где
                технологии, инфраструктура, дизайн и архитектура объединяются
                ради вашего комфорта.
              </Text>
              <Button>Выбрать квартиру</Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src='/main.png'
        className={styles.backgroundImage}
        width={1253}
        height={830}
        alt='main-img'
      />
    </section>
  )
}

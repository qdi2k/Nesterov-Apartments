import {MainTitle, SubstrateButton, Text} from '@/shared/ui'
import styles from './ApartmentInfo.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {ApartmentCard} from '../apartment-card'

export function ApartmentInfo() {
  return (
    <section>
      <div className={themeStyles.container}>
        <div className={styles.textContainer}>
          <MainTitle>Квартира</MainTitle>
          <Text
            size='sMedium'
            weight='light'
            isUppercase
            className={styles.titleInfo}
          >
            Секция 1, 4 эт., 2 комнаты, 72 кв.м
          </Text>
        </div>
        <ApartmentCard
          rooms={2}
          square={72}
          floor={4}
          section={1}
          price={7560000}
          isInfo
        />
      </div>
      <SubstrateButton
        classNameBackground={styles.substrateButtonBackground}
        classNameContent={styles.substrateButtonContent}
        textButton='Записаться на просмотр'
      >
        Увидеть квартиру своими глазами
      </SubstrateButton>
    </section>
  )
}

import {Title, Text, SubstrateButton} from '@/shared/ui'
import styles from './Architecture.module.css'

export function Architecture() {
  return (
    <section>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <Text className={styles.imageTitle} size='xMedium'>
              Архитектура
            </Text>
            <Text>
              Таким образом рамки и место обучения кадров влечет за собой
              процесс внедрения и модернизации позиций, занимаемых участниками.
            </Text>
          </div>
        </div>
        <div>
          <Title className={styles.title}>
            Почему <br /> ЖК Nesterov?
          </Title>
          <ul className={styles.listContainer}>
            <li>
              <Text size='xMedium' weight='bold' color='brown'>
                Современная архитектура
              </Text>
            </li>
            <li>
              <Text size='xMedium'>Органичные планировки</Text>
            </li>
            <li>
              <Text size='xMedium'>Подземный паркинг</Text>
            </li>
            <li>
              <Text size='xMedium'>Закрытый двор</Text>
            </li>
            <li>
              <Text size='xMedium'>Собственный сквер</Text>
            </li>
          </ul>
        </div>
      </div>
      <SubstrateButton
        className={styles.substrateButtonContainer}
        textButton='А с ремонтом'
      >
        Стоимость квартиры легко рассчитать с помощью <br /> нашего калькулятора
      </SubstrateButton>
    </section>
  )
}

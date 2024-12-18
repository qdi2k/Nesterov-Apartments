import {Title} from '@/shared/ui'
import {Text} from '@/shared/ui/text/Text'
import styles from './Architecture.module.css'
import {SubstrateButton} from '@/shared/ui/substrateButton'

export function Architecture() {
  return (
    <section>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <Text className={styles.imageTitle} size='medium'>
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
              <Text size='medium' weight='bold' color='brown'>
                Современная архитектура
              </Text>
            </li>
            <li>
              <Text size='medium'>Органичные планировки</Text>
            </li>
            <li>
              <Text size='medium'>Подземный паркинг</Text>
            </li>
            <li>
              <Text size='medium'>Закрытый двор</Text>
            </li>
            <li>
              <Text size='medium'>Собственный сквер</Text>
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

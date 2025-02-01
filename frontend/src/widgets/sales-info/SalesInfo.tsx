import {Advantage, MainTitle, SubstrateButton, Text} from '@/shared/ui'
import styles from './SalesInfo.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'

export function SalesInfo() {
  return (
    <>
      <div className={`${styles.container} ${themeStyles.container}`}>
        <MainTitle>Условия продажи</MainTitle>
        <Text weight='light' className={styles.description}>
          Для наших клиентов доступно несколько вариантов приобретения квартир в
          ЖИЛОМ КОМПЛЕКСЕ «NESTEROV».
          <br />
          Их очевидным преимуществом является то, что все они предусматривают
          покупку жилья напрямую у застройщика, минуя посредников!
        </Text>
        <ul className={styles.listContainer}>
          <li>
            <Advantage
              icon='payment'
              title='100 % оплата'
              description='Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.'
            />
          </li>
          <li>
            <Advantage
              icon='calculator'
              title='Беспроцентная рассрочка от застройщика на 3 месяца'
              description='Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.'
            />
          </li>
          <li>
            <Advantage
              icon='department'
              title='Ипотека'
              description='Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.'
            />
          </li>
        </ul>
      </div>
      <SubstrateButton
        className={styles.substrateButtonContainer}
        href='/apartments'
        textButton='Выбрать квартиру'
      >
        Наши менеджеры помогут подобрать для вас
        <br /> оптимальный вариант покупки
      </SubstrateButton>
    </>
  )
}

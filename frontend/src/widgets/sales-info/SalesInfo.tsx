import {Advantage, MainTitle, SubstrateButton, Text} from '@/shared/ui'
import styles from './SalesInfo.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {type IconName} from '@/shared/ui/icon/Icon'

const ADVANTAGE_DATA = [
  {
    id: 1,
    icon: 'payment' as IconName,
    title: '100 % оплата',
    description:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
  },
  {
    id: 2,
    icon: 'calculator' as IconName,
    title: 'Беспроцентная рассрочка на 3 месяца',
    description:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
  },
  {
    id: 3,
    icon: 'department' as IconName,
    title: 'Ипотека',
    description:
      'Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
  },
]

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
        <Advantage data={ADVANTAGE_DATA} />
      </div>
      <SubstrateButton
        classNameBackground={styles.substrateButtonBackground}
        classNameContent={styles.substrateButtonContent}
        href='/apartments'
        textButton='Выбрать квартиру'
      >
        Наши менеджеры помогут подобрать для вас
        <br /> оптимальный вариант покупки
      </SubstrateButton>
    </>
  )
}

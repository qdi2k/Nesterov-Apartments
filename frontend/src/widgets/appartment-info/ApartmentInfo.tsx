'use client'

import {Icon, MainTitle, SubstrateButton, Text} from '@/shared/ui'
import styles from './ApartmentInfo.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image from 'next/image'

export function ApartmentInfo() {
  return (
    <section>
      <div className={themeStyles.container}>
        <div className={styles.textContainer}>
          <MainTitle>Квартира</MainTitle>
          <Text
            size='xMedium'
            weight='light'
            isUppercase
            className={styles.titleInfo}
          >
            Секция 1, 4 эт., 2 комнаты, 72 кв.м
          </Text>
        </div>
        <div className={styles.contentInfo}>
          <Image
            src={require('../../shared/assets/images/apartment.png')}
            alt='apartment'
            height={614}
            width={1183}
          />
          <div className={styles.rightContent}>
            <ul className={styles.listContainer}>
              <li className={styles.listItem}>
                <Text size='xMedium' color='brown'>
                  Количество
                  <br />
                  комнат
                </Text>
                <Text size='xMedium' className={styles.listValueText}>
                  2
                </Text>
              </li>
              <li className={styles.listItem}>
                <Text size='xMedium' color='brown'>
                  Площадь
                </Text>
                <Text size='xMedium' className={styles.listValueText}>
                  72 кв.м.
                </Text>
              </li>
              <li className={styles.listItem}>
                <Text size='xMedium' color='brown'>
                  Этаж
                </Text>
                <Text size='xMedium' className={styles.listValueText}>
                  4
                </Text>
              </li>
              <li className={styles.listItem}>
                <Text size='xMedium' color='brown'>
                  Секция
                </Text>
                <Text size='xMedium' className={styles.listValueText}>
                  1
                </Text>
              </li>
              <li className={styles.listItem}>
                <Text size='xMedium' color='brown'>
                  Стоимость
                </Text>
                <Text size='xMedium' className={styles.listValueText}>
                  7 500 000 р.
                </Text>
              </li>
            </ul>
            <button className={styles.countButton}>
              <Icon name='calculatorSmall' size={30} />
              <Text size='small' weight='bold'>
                Рассчитать ипотеку
              </Text>
              <Icon name='arrow' size={17} />
            </button>
          </div>
        </div>
      </div>
      <SubstrateButton
        className={styles.substrateButtonContainer}
        textButton='Записаться на просмотр'
      >
        Увидеть квартиру своими глазами
      </SubstrateButton>
    </section>
  )
}

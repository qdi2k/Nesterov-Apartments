'use client'

import {Text, Title} from '@/shared/ui'
import styles from './Partners.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image from 'next/image'

export function Partners() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title className={styles.title}>Наши партнеры</Title>
      <div className={styles.logoList}>
        <Image
          src={require('../../shared/assets/images/vtbLogo.png')}
          alt='vtb'
          height={142}
          width={250}
        />
        <Image
          src={require('../../shared/assets/images/sberLogo.png')}
          alt='vtb'
          height={142}
          width={250}
        />
        <Image
          src={require('../../shared/assets/images/alfaLogo.png')}
          alt='vtb'
          height={142}
          width={250}
        />
        <Image
          src={require('../../shared/assets/images/discoveryLogo.png')}
          alt='vtb'
          height={142}
          width={250}
        />
        <Image
          src={require('../../shared/assets/images/gazpromLogo.png')}
          alt='vtb'
          height={142}
          width={250}
        />
        <Image
          src={require('../../shared/assets/images/homeRfLogo.png')}
          alt='vtb'
          height={142}
          width={250}
        />
      </div>
      <Text className={styles.text} weight='light' color='grey'>
        И другие банки. Подробности можно уточнить у менеджера
      </Text>
    </section>
  )
}

'use client'

import {Text, Title} from '@/shared/ui'
import styles from './Partners.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image from 'next/image'
import vtbImage from '@/shared/assets/images/vtbLogo.png'
import sberImage from '@/shared/assets/images/sberLogo.png'
import alfaImage from '@/shared/assets/images/alfaLogo.png'
import discoveryImage from '@/shared/assets/images/discoveryLogo.png'
import gazpromImage from '@/shared/assets/images/gazpromLogo.png'
import homeRfImage from '@/shared/assets/images/homeRfLogo.png'

const LOGO_DATA = {
  data: [
    vtbImage,
    sberImage,
    alfaImage,
    discoveryImage,
    gazpromImage,
    homeRfImage,
  ],
}

export function Partners() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title className={styles.title}>Наши партнеры</Title>
      <div className={styles.logoList}>
        {LOGO_DATA.data.map((logo, index) => (
          <div className={styles.logo} key={index}>
            <Image
              className={styles.logo}
              src={logo}
              alt='partner-logo'
              fill
              sizes='100%'
            />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <Text className={styles.text} weight='light' color='grey'>
          И другие банки.&nbsp;
        </Text>
        <Text className={styles.text} weight='light' color='grey'>
          Подробности можно уточнить у менеджера
        </Text>
      </div>
    </section>
  )
}

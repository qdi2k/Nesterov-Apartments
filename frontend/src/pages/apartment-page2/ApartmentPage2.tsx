import {Apartments} from '@/widgets/apartments'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './ApartmentPage2.module.css'
import {Button, Text, Title} from '@/shared/ui'
import {Record} from '@/widgets/record'
import Image from 'next/image'
import apartmentImage1 from '@/shared/assets/images/apartments/6cedd80b436f266361756f174388a854c1451d8f.jpg'
import apartmentImage2 from '@/shared/assets/images/apartments/6f4dae2fcd0fcbe264fd1d4e840485b9.jpg'
import apartmentImage3 from '@/shared/assets/images/apartments/app_large.webp'
import apartmentImage4 from '@/shared/assets/images/apartments/fe0de264fc1403e149d5ee439a9bf335e4391cdc.jpg'
import apartmentImage5 from '@/shared/assets/images/apartments/i.webp'
import apartmentImage6 from '@/shared/assets/images/apartments/large.webp'

const MOCK_APARTMENTS = [
  {
    id: 1,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
  {
    id: 2,
    price: '16 086 100',
    src: apartmentImage2,
    discountPrice: '13 673 185',
    discount: '15',
    rooms: 'Однокомнатная',
    square: '21.7',
    floor: 12,
  },
  {
    id: 3,
    price: '14 800 000',
    src: apartmentImage3,
    rooms: 'Студия',
    square: '15',
    floor: 8,
  },
  {
    id: 4,
    price: '16 500 000',
    src: apartmentImage4,
    rooms: 'Однокомнатная',
    square: '19.1',
    floor: 2,
  },
  {
    id: 5,
    price: '12 430 000',
    src: apartmentImage5,
    rooms: 'Трехкомнатная',
    square: '34.2',
    floor: 14,
  },
  {
    id: 6,
    price: '21 200 000',
    src: apartmentImage6,
    discountPrice: '18 020 000',
    discount: '15',
    rooms: 'Двухкомнатная',
    square: '22.9',
    floor: 11,
  },
]

const ApartmentInfo = () => {
  return (
    <div className={styles.container}>
      <div className={`${themeStyles.container} ${styles.contentContainer}`}>
        <div className={styles.image}>
          <Image
            src={apartmentImage1}
            className={styles.image}
            alt='apartment-image'
            fill
          />
        </div>
        <div className={styles.content}>
          <div className={styles.topContainer}>
            <Text size='sMedium' weight='bold'>
              Студия, 27.8 м²
            </Text>
            <div>
              <div className={styles.priceContainer}>
                <Text size='sMedium' weight='bold' color='orange'>
                  5 185 747 ₽
                </Text>
                <Text className={styles.totalPrice}>6 100 879 ₽</Text>
              </div>
              <Text>186 538 ₽/м²</Text>
            </div>
            <div className={styles.statusContainer}>
              <Text className={styles.status} color='orange'>
                -15%
              </Text>
              <Text className={styles.statusGrey}>II квартал 2025</Text>
            </div>
          </div>
          <div>
            <Text size='xSmall' weight='bold'>
              О квартире
            </Text>
            <div className={styles.tableInfoContainer}>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Проект</Text>
                <Text>Десятка</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Адрес</Text>
                <Text>Московская область</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Площадь</Text>
                <Text>Площадь 27.8 м²</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Корпус</Text>
                <Text>Корпус 7</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Секция</Text>
                <Text>Секция 1</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Этаж</Text>
                <Text>10 из 15</Text>
              </div>
            </div>
            <Text weight='bold' className={styles.tableTitle}>
              Размеры
            </Text>
            <div className={styles.tableInfoContainer}>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Прихожая</Text>
                <Text>3.1 м²</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Кухня</Text>
                <Text>6.1 м²</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Комната</Text>
                <Text>13.5 м²</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Санузел</Text>
                <Text>3.8 м²</Text>
              </div>
              <div className={styles.tableInfo}>
                <Text color='blueLight'>Балкон</Text>
                <Text>4.33 м²</Text>
              </div>
            </div>
          </div>
          <div>
            <Button className={styles.button} textColor='greyDark'>
              Рассчитать ипотеку
            </Button>
            <Button className={styles.buttonMain}>Забронировать</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ApartmentPage2() {
  return (
    <div>
      <ApartmentInfo />
      <div className={`${themeStyles.container} ${styles.container2}`}>
        <Title>Так может выглядеть ваша квартира</Title>
      </div>
      <div className={`${themeStyles.container} ${styles.container2}`}>
        <Title>Рассчитайте ипотеку</Title>
      </div>
      <Apartments
        apartments={MOCK_APARTMENTS}
        title='Похожие квартиры'
        buttonTitle='Показать ещё'
      />
      <Record />
    </div>
  )
}

import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './ObjectPage.module.css'
import objectImage from '@/shared/assets/images/objects/9bfc46453fa2661e9489550ebef3c5472e643e20.jpeg'
import objectImage2 from '@/shared/assets/images/objects/dvor01_01_fin_1080__1jfuy9e.jpg'
import objectImage3 from '@/shared/assets/images/objects/i.webp'
import objectImage4 from '@/shared/assets/images/objects/optimize.webp'
import {Gallery} from '@/widgets/gallery/Gallery'
import {Text, Title} from '@/shared/ui'
import {Record} from '@/widgets/record'
import {Objects} from '@/widgets/objects'
import {Apartments} from '@/widgets/apartments'
import apartmentImage1 from '@/shared/assets/images/apartments/6cedd80b436f266361756f174388a854c1451d8f.jpg'
import apartmentImage2 from '@/shared/assets/images/apartments/6f4dae2fcd0fcbe264fd1d4e840485b9.jpg'
import apartmentImage3 from '@/shared/assets/images/apartments/app_large.webp'
import apartmentImage4 from '@/shared/assets/images/apartments/fe0de264fc1403e149d5ee439a9bf335e4391cdc.jpg'
import apartmentImage5 from '@/shared/assets/images/apartments/i.webp'
import apartmentImage6 from '@/shared/assets/images/apartments/large.webp'
import {Peculiarity} from '@/widgets/peculiarity'
import {ProgressBuild} from '@/widgets/progress-build'
import {MortgageCalculator} from '@/widgets/mortgage-calculator'
import {Location} from '@/widgets/location'
import {PriceChart} from '@/widgets/price-chart'

const MOCK_IMAGES = [
  {
    id: 1,
    src: objectImage,
  },
  {
    id: 2,
    src: objectImage2,
  },
  {
    id: 3,
    src: objectImage3,
  },
  {
    id: 4,
    src: objectImage4,
  },
]

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
  {
    id: 7,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
  {
    id: 8,
    price: '16 086 100',
    src: apartmentImage2,
    discountPrice: '13 673 185',
    discount: '15',
    rooms: 'Однокомнатная',
    square: '21.7',
    floor: 12,
  },
  {
    id: 9,
    price: '14 800 000',
    src: apartmentImage3,
    rooms: 'Студия',
    square: '15',
    floor: 8,
  },
]

const data = {
  labels: [
    '01.01.2024',
    '01.02.2024',
    '01.03.2024',
    '01.04.2024',
    '01.05.2024',
    '01.06.2024',
    '01.07.2024',
    '01.08.2024',
    '01.09.2024',
    '01.10.2024',
    '01.11.2024',
    '01.12.2024',
  ],
  prices: [
    5000000, 5200000, 5100000, 5300000, 5400000, 5300000, 5250000, 5100000,
    5100000, 5150000, 5190000, 5120000,
  ],
}

const totalData = {
  labels: [
    '01.07.2023',
    '01.08.2023',
    '01.09.2023',
    '01.10.2023',
    '01.11.2023',
    '01.12.2023',
    '01.01.2024',
    '01.02.2024',
    '01.03.2024',
    '01.04.2024',
    '01.05.2024',
    '01.06.2024',
    '01.07.2024',
    '01.08.2024',
    '01.09.2024',
    '01.10.2024',
    '01.11.2024',
    '01.12.2024',
  ],
  prices: [
    5600000, 5650000, 5500000, 5400000, 5300000, 5200000, 5000000, 5200000,
    5100000, 5300000, 5400000, 5300000, 5250000, 5100000, 5100000, 5150000,
    5190000, 5120000,
  ],
}

export function ObjectPage() {
  return (
    <div>
      <Gallery images={MOCK_IMAGES} isMax />
      <div className={`${themeStyles.container} ${styles.container1}`}>
        <Title>О проекте</Title>
        <div className={styles.about}>
          <Text weight='bold' size='sMedium'>
            Shagal
          </Text>
          <Text>
            Расположен в престижном Даниловском районе и уже сейчас претендует
            на звание одной из ярчайших точек притяжения. Масштабный проект
            выходит за рамки существующих стандартов. Предвосхищает ожидания,
            предлагая все возможности для комфортной жизни. Здесь свои правила и
            ежедневные сценарии.
          </Text>
        </div>
      </div>
      <Peculiarity />
      <Apartments
        apartments={MOCK_APARTMENTS}
        title='Квартиры в Shagal'
        buttonTitle='Показать ещё'
        isMore
      />
      <MortgageCalculator />
      <ProgressBuild />
      <PriceChart data={data} totalData={totalData} />
      <Objects title='Другие объекты' />
      <Location title='Расположение' />
      <Record />
    </div>
  )
}

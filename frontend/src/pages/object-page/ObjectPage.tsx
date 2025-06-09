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
import objects from '@/shared/assets/mockData/objects/objects.json'
import apartments from '@/shared/assets/mockData/apartments/apartments.json'
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

export function ObjectPage({title}) {
  const objectData = objects.objects.find(
    (obj) => obj.title.toLowerCase() === title.toLowerCase()
  )

  return (
    <div>
      <Gallery title={objectData?.title} images={MOCK_IMAGES} isMax />
      <div className={`${themeStyles.container} ${styles.container1}`}>
        <Title>О проекте</Title>
        <div className={styles.about}>
          <Text weight='bold' size='sMedium'>
            {objectData?.title}
          </Text>
          <Text>{objectData?.description}</Text>
        </div>
      </div>
      <Peculiarity />
      <Apartments
        apartments={apartments.apartments}
        title={`Квартиры в ${objectData?.title}`}
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

import {Main} from '@/widgets/main'
import {Architecture} from '@/widgets/architecture'
import {Advantages} from '@/widgets/advantages'
import {Location} from '@/widgets/location'
import {Record} from '@/widgets/record'
import {Questions} from '@/widgets/questions'
import {Objects} from '@/widgets/objects'
import {Apartments} from '@/widgets/apartments'
import {AboutUs} from '@/widgets/aboutUs'
import {Blogs} from '@/widgets/blogs'
import apartmentImage1 from '@/shared/assets/images/apartments/6cedd80b436f266361756f174388a854c1451d8f.jpg'
import apartmentImage2 from '@/shared/assets/images/apartments/6f4dae2fcd0fcbe264fd1d4e840485b9.jpg'
import apartmentImage3 from '@/shared/assets/images/apartments/app_large.webp'
import apartmentImage4 from '@/shared/assets/images/apartments/fe0de264fc1403e149d5ee439a9bf335e4391cdc.jpg'
import apartmentImage5 from '@/shared/assets/images/apartments/i.webp'
import apartmentImage6 from '@/shared/assets/images/apartments/large.webp'
import {MortgageCalculator} from '@/widgets/mortgage-calculator'

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
    src: apartmentImage6,
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
    src: apartmentImage4,
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

export function HomePage() {
  return (
    <div>
      <Main />
      <AboutUs />
      <Objects />
      <Apartments apartments={MOCK_APARTMENTS} />
      <MortgageCalculator />
      <Questions />
      <Blogs />
      <Location title='Офис продаж' />
      <Record />
    </div>
  )
}

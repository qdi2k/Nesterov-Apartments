import {Apartments} from '@/widgets/apartments'
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
  {
    id: 10,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
  {
    id: 11,
    price: '16 086 100',
    src: apartmentImage2,
    discountPrice: '13 673 185',
    discount: '15',
    rooms: 'Однокомнатная',
    square: '21.7',
    floor: 12,
  },
  {
    id: 12,
    price: '14 800 000',
    src: apartmentImage3,
    rooms: 'Студия',
    square: '15',
    floor: 8,
  },
  {
    id: 13,
    price: '16 500 000',
    src: apartmentImage4,
    rooms: 'Однокомнатная',
    square: '19.1',
    floor: 2,
  },
  {
    id: 14,
    price: '12 430 000',
    src: apartmentImage5,
    rooms: 'Трехкомнатная',
    square: '34.2',
    floor: 14,
  },
  {
    id: 15,
    price: '21 200 000',
    src: apartmentImage6,
    discountPrice: '18 020 000',
    discount: '15',
    rooms: 'Двухкомнатная',
    square: '22.9',
    floor: 11,
  },
  {
    id: 16,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
  {
    id: 17,
    price: '16 086 100',
    src: apartmentImage2,
    discountPrice: '13 673 185',
    discount: '15',
    rooms: 'Однокомнатная',
    square: '21.7',
    floor: 12,
  },
  {
    id: 18,
    price: '14 800 000',
    src: apartmentImage3,
    rooms: 'Студия',
    square: '15',
    floor: 8,
  },
  {
    id: 19,
    price: '16 500 000',
    src: apartmentImage4,
    rooms: 'Однокомнатная',
    square: '19.1',
    floor: 2,
  },
  {
    id: 20,
    price: '12 430 000',
    src: apartmentImage5,
    rooms: 'Трехкомнатная',
    square: '34.2',
    floor: 14,
  },
  {
    id: 21,
    price: '21 200 000',
    src: apartmentImage6,
    discountPrice: '18 020 000',
    discount: '15',
    rooms: 'Двухкомнатная',
    square: '22.9',
    floor: 11,
  },
  {
    id: 22,
    price: '21 000 000',
    src: apartmentImage1,
    rooms: 'Двухкомнатная',
    square: '28.2',
    floor: 7,
  },
]

export function ApartmentsPage() {
  return (
    <div>
      <Apartments
        apartments={MOCK_APARTMENTS}
        title='Квартиры'
        buttonTitle='Показать ещё'
        isMore
        isFilter
      />
    </div>
  )
}

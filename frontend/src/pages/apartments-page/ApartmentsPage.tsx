import {Apartments} from '@/widgets/apartments'
import apartmentImage1 from '@/shared/assets/images/apartments/6cedd80b436f266361756f174388a854c1451d8f.jpg'
import apartmentImage2 from '@/shared/assets/images/apartments/6f4dae2fcd0fcbe264fd1d4e840485b9.jpg'
import apartmentImage3 from '@/shared/assets/images/apartments/app_large.webp'
import apartmentImage4 from '@/shared/assets/images/apartments/fe0de264fc1403e149d5ee439a9bf335e4391cdc.jpg'
import apartmentImage5 from '@/shared/assets/images/apartments/i.webp'
import apartmentImage6 from '@/shared/assets/images/apartments/large.webp'
import apartments from '@/shared/assets/mockData/apartments/apartments.json'

export function ApartmentsPage() {
  return (
    <div>
      <Apartments
        apartments={apartments.apartments}
        title='Квартиры'
        buttonTitle='Показать ещё'
        isLoad={true}
        isMore
        isFilter
      />
    </div>
  )
}

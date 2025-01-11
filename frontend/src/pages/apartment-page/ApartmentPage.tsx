import {ApartmentGallery} from '@/widgets/apartment-gallery'
import {ApartmentInfo} from '@/widgets/appartment-info'
import {Calculator} from '@/widgets/calculator'
import {Record} from '@/widgets/record'

export function ApartmentPage() {
  return (
    <div>
      <ApartmentInfo />
      <ApartmentGallery />
      <Calculator />
      <Record />
    </div>
  )
}

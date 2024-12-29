import {InfrastructuraGallery} from '@/widgets/infrastructura-gallery/infrastructuraGallery'
import {InfrastructuraInfo} from '@/widgets/infrastructura-info'
import {InfrastructuraMap} from '@/widgets/infrastructura-map'
import {Record} from '@/widgets/record'

export function InfrastructuraPage() {
  return (
    <div>
      <InfrastructuraInfo />
      <InfrastructuraGallery />
      <InfrastructuraMap />
      <Record />
    </div>
  )
}

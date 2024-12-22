import {BuilderInfo} from '@/widgets/builder-info'
import {ProjectGallery} from '@/widgets/project-gallery'
import {Record} from '@/widgets/record'

export function AboutBuilderPage() {
  return (
    <div>
      <BuilderInfo />
      <ProjectGallery />
      <Record />
    </div>
  )
}

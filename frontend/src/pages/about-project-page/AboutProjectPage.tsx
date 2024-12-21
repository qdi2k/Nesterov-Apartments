import {DesignCarousel} from '@/widgets/design-carousel'
import {ProjectInfo} from '@/widgets/project-info'
import {Record} from '@/widgets/record'

export function AboutProjectPage() {
  return (
    <div>
      <ProjectInfo />
      <DesignCarousel />
      <Record />
    </div>
  )
}

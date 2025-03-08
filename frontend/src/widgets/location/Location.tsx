import {Title} from '@/shared/ui'
import styles from './Location.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {RouteMap} from '../routeMap'

interface LocationProps {
  title: string
}

export function Location({title}: LocationProps) {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title>{title}</Title>
      <RouteMap />
    </section>
  )
}

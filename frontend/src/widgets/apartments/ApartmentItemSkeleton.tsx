import {Skeleton} from '@/shared/ui'
import styles from './Apartments.module.css'

export function ApartmentItemSkeleton() {
  return (
    <div className={styles.apartmentContainerSkeleton}>
      <Skeleton width='100%' height='200px' />
      <div className={styles.skeletonContent}>
        <Skeleton width='30%' height='30px' />
        <Skeleton width='40%' height='30px' />
        <Skeleton width='100%' height='30px' />
        <Skeleton width='100%' height='30px' />
      </div>
    </div>
  )
}

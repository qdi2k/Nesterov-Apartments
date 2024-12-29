import {Text} from '@/shared/ui'
import styles from './Gallery.module.css'

interface IGalleryItemProps {
  title: string
}

export function GalleryItem({title}: IGalleryItemProps) {
  return (
    <div className={styles.galleryItem}>
      <Text className={styles.galleryItemTitle} size='xMedium' weight='light'>
        {title}
      </Text>
    </div>
  )
}

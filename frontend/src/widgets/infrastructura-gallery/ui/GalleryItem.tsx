import {Text} from '@/shared/ui'
import styles from './Gallery.module.css'

interface IGalleryItemProps {
  title: string
}

export function GalleryItem({title}: IGalleryItemProps) {
  return (
    <div className={styles.galleryItem}>
      <Text size='sMedium' weight='light' isUppercase>
        {title}
      </Text>
    </div>
  )
}

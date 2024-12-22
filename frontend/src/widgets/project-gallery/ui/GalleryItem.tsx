import {Text} from '@/shared/ui'
import styles from './GalleryItem.module.css'
import Image from 'next/image'

interface IGalleryItemProps {
  title: string
  description: string
  homeInfo: string
  isSelectedItem: boolean
}

export function GalleryItem({
  title,
  description,
  homeInfo,
  isSelectedItem,
}: IGalleryItemProps) {
  return (
    <li
      className={`${styles.container} ${isSelectedItem && styles.selectedItem}`}
    >
      <Image
        src={require('../../../shared/assets/images/historyItemImage.png')}
        alt='carousel-item'
        className={styles.image}
        height={401}
        width={397}
      />
      <div
        className={`${styles.textContainer} ${isSelectedItem && styles.selectedTextContainer}`}
      >
        <Text size='small' weight='semiBold' color='brown'>
          {title}
        </Text>
        {isSelectedItem && (
          <>
            <Text weight='semiBold' className={styles.homeInfo}>
              {homeInfo}
            </Text>
            <Text weight='light'>{description}</Text>
          </>
        )}
      </div>
    </li>
  )
}

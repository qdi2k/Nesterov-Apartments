import {Text} from '@/shared/ui'
import styles from './GalleryItem.module.css'
import Image, {type StaticImageData} from 'next/image'

interface IGalleryItemProps {
  img: StaticImageData
  title: string
  description: string
  homeInfo: string
  isSelectedItem: boolean
}

export function GalleryItem({
  img,
  title,
  description,
  homeInfo,
  isSelectedItem,
}: IGalleryItemProps) {
  return (
    <li
      className={`${styles.container} ${isSelectedItem && styles.selectedItem}`}
    >
      <div className={styles.image}>
        <Image
          src={img}
          className={styles.image}
          alt='carousel-item'
          fill
          sizes='100%'
        />
      </div>
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

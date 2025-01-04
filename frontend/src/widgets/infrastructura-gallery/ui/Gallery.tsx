import styles from './Gallery.module.css'
import {GalleryItem} from './GalleryItem'

export function Gallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.galleryImage} ${styles.firstImage}`}>
          <GalleryItem title='Зеленая зона и детские площадки' />
        </div>
        <div className={`${styles.galleryImage} ${styles.thirdImage}`}>
          <GalleryItem title='Зеленая зона и детские площадки' />
        </div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.galleryImage} ${styles.secondImage}`}>
          <GalleryItem title='Зеленая зона и детские площадки' />
        </div>
        <div className={`${styles.galleryImage} ${styles.fourthImage}`}>
          <GalleryItem title='Зеленая зона и детские площадки' />
        </div>
      </div>
    </div>
  )
}

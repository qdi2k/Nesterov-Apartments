import {Icon} from '@/shared/ui'
import styles from './GalleryFull.module.css'
import Image from 'next/image'

export function GalleryFull({
  images,
  selectedIndex,
  isOpen,
  handleOpenGallery,
  handleChangeImage,
}) {
  const goToPrevious = (e) => {
    handleChangeImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    e.stopPropagation()
  }

  const goToNext = (e) => {
    handleChangeImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    e.stopPropagation()
  }

  const closeGallery = (e) => {
    document.body.style.overflow = 'visible'
    e.stopPropagation()
    handleOpenGallery(false)
  }

  return (
    <div
      className={`${styles.galleryOverlay} ${!isOpen && styles.galleryOverlayClosed}`}
      onClick={closeGallery}
    >
      <div
        className={`${styles.galleryContent} ${!isOpen && styles.galleryContentClosed}`}
      >
        <button className={styles.closeButton} onClick={(e) => closeGallery(e)}>
          <Icon name='close' />
        </button>
        <Image
          src={images[selectedIndex]?.src}
          className={styles.galleryImage}
          alt='progress-image'
          onClick={(e) => e.stopPropagation()}
        />
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={(e) => goToPrevious(e)}
        >
          <Icon name='arrow' size={16} />
        </button>
        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={(e) => goToNext(e)}
        >
          <Icon name='arrow' size={16} />
        </button>
      </div>
    </div>
  )
}

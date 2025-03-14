import {Icon} from '@/shared/ui'
import styles from './GalleryFull.module.css'
import {useRef} from 'react'
import Image from 'next/image'

export function GalleryFull({
  images,
  selectedIndex,
  isOpen,
  handleOpenGallery,
  handleChangeImage,
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    handleChangeImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    handleChangeImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleClose = () => {
    handleOpenGallery(false)
    document.body.style.overflow = 'visible'
  }

  // useEffect(() => {
  //   if (!isOpen) return
  //   const handleClick = (event: MouseEvent) => {
  //     if (!containerRef.current) return
  //     if (!containerRef.current.contains(event.target as HTMLElement)) {
  //       handleOpenGallery(false)
  //       return
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClick)

  //   return () => {
  //     document.removeEventListener('mousedown', handleClick)
  //   }
  // }, [isOpen])

  return (
    <div className={`${styles.galleryOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.galleryContent}>
        <button className={styles.closeButton} onClick={() => handleClose()}>
          <Icon name='close' />
        </button>
        <Image
          src={images[selectedIndex]?.src}
          className={styles.galleryImage}
          alt='progress-image'
          fill
          sizes='100%'
        />
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={goToPrevious}
        >
          <Icon name='arrow' size={16} />
        </button>
        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={goToNext}
        >
          <Icon name='arrow' size={16} />
        </button>
      </div>
    </div>
  )
}

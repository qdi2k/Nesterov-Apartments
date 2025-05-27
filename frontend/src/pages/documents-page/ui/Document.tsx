import {Button, Icon, Text} from '@/shared/ui'
import {motion} from 'framer-motion'
import styles from './Document.module.css'

export interface IDocumentProps {
  file: 'wordFile' | 'pdfFile'
  title: string
  date: string
  delay: number
}

export function Document({file, title, date, delay}: IDocumentProps) {
  return (
    <motion.li
      className={styles.container}
      variants={{
        hidden: {
          y: 50,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: delay,
          },
        },
      }}
    >
      <div className={styles.leftContent}>
        <Icon name={file} size={38} className={styles.iconFile} />
        <Text size='sMedium' weight='semiBold' className={styles.fileName}>
          {title}
        </Text>
      </div>
      <div className={styles.rightContent}>
        <Text size='xSmall' className={styles.date}>
          {date}
        </Text>
        <Button className={styles.downloadButton}>Скачать</Button>
      </div>
    </motion.li>
  )
}

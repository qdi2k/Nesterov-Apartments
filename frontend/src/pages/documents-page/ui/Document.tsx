import {Icon, Text} from '@/shared/ui'
import styles from './Document.module.css'

export interface IDocumentProps {
  file: 'wordFile' | 'pdfFile'
  title: string
  date: string
}

export function Document({file, title, date}: IDocumentProps) {
  return (
    <li className={styles.container}>
      <div className={styles.leftContent}>
        <Icon name={file} size={60} className={styles.iconFile} />
        <Text size='sMedium' weight='light' isUppercase>
          {title}
        </Text>
      </div>
      <div className={styles.rightContent}>
        <Text size='sMedium' weight='light'>
          {date}
        </Text>
        <div className={styles.downloadButton}>
          <Icon name='download' size={28} />
          <Text size='small' weight='semiBold' color='brown'>
            Скачать
          </Text>
        </div>
      </div>
    </li>
  )
}

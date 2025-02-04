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
      <Icon name={file} size={60} />
      <Text size='sMedium' weight='light' isUppercase>
        {title}
      </Text>
      <Text size='sMedium' weight='light'>
        {date}
      </Text>
      <div className={styles.downloadButton}>
        <Icon name='download' size={28} />
        <Text size='small' weight='semiBold' color='brown'>
          Скачать
        </Text>
      </div>
    </li>
  )
}

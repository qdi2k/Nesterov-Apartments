import {MainTitle, TextButton} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './DocumentsPage.module.css'
import {Document} from './ui'
import {IDocumentProps} from './ui/Document'

const documentMock = [
  {
    id: 1,
    file: 'wordFile',
    title: 'Название документа длинное название в две строки',
    date: '24.06.2024',
  },
  {
    id: 2,
    file: 'pdfFile',
    title: 'Название документа',
    date: '24.06.2024',
  },
  {
    id: 3,
    file: 'wordFile',
    title:
      'Название документа длинное название в две строки длинное название в две строки',
    date: '24.06.2024',
  },
  {
    id: 4,
    file: 'wordFile',
    title: 'Название документа длинное название в две строки',
    date: '24.06.2024',
  },
  {
    id: 5,
    file: 'wordFile',
    title: 'Название документа длинное название в две строки',
    date: '24.06.2024',
  },
]

export function DocumentsPage() {
  return (
    <div className={themeStyles.container}>
      <MainTitle>Документы</MainTitle>
      <ul className={styles.listContainer}>
        {documentMock.map((document) => (
          <Document
            file={(document as IDocumentProps).file}
            title={document.title}
            date={document.date}
            key={document.id}
          />
        ))}
      </ul>
      <TextButton className={styles.textButton}>Показать еще</TextButton>
    </div>
  )
}

'use client'

import {MainTitle, TextButton} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './DocumentsPage.module.css'
import {Document} from './ui'
import {IDocumentProps} from './ui/Document'
import {useEffect, useState} from 'react'

type DocumentData = {
  id: number
  file: string
  title: string
  date: string
}

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
  {
    id: 6,
    file: 'pdfFile',
    title: 'Название документа',
    date: '24.06.2024',
  },
  {
    id: 7,
    file: 'wordFile',
    title:
      'Название документа длинное название в две строки длинное название в две строки',
    date: '24.06.2024',
  },
  {
    id: 8,
    file: 'wordFile',
    title: 'Название документа длинное название в две строки',
    date: '24.06.2024',
  },
  {
    id: 9,
    file: 'wordFile',
    title: 'Название документа длинное название в две строки',
    date: '24.06.2024',
  },
  {
    id: 10,
    file: 'pdfFile',
    title: 'Название документа',
    date: '24.06.2024',
  },
  {
    id: 11,
    file: 'wordFile',
    title:
      'Название документа длинное название в две строки длинное название в две строки 11',
    date: '24.06.2024',
  },
]

export function DocumentsPage() {
  const [postsToShow, setPostsToShow] = useState<DocumentData[]>([])
  const [documentsCount, setDocumentsCount] = useState(5)

  const loopWithSlice = (start: number, end: number) => {
    const slicedPosts = documentMock.slice(start, end)
    const arrayForHoldingPosts = [...postsToShow, ...slicedPosts]
    setPostsToShow(arrayForHoldingPosts)
  }

  const handleShowMoreDocuments = () => {
    const remainingDocuments =
      documentMock.length - postsToShow.length >= 5
        ? 5
        : documentMock.length - postsToShow.length
    loopWithSlice(documentsCount, documentsCount + remainingDocuments)
    setDocumentsCount((prev) => prev + remainingDocuments)
  }

  useEffect(() => {
    loopWithSlice(0, 5)
  }, [])

  return (
    <div className={themeStyles.container}>
      <MainTitle>Документы</MainTitle>
      <ul className={styles.listContainer}>
        {postsToShow.map((document) => (
          <Document
            file={(document as IDocumentProps).file}
            title={document.title}
            date={document.date}
            key={document.id}
          />
        ))}
      </ul>
      {documentMock.length > postsToShow.length && (
        <TextButton
          className={styles.textButton}
          onClick={handleShowMoreDocuments}
        >
          Показать еще
        </TextButton>
      )}
    </div>
  )
}

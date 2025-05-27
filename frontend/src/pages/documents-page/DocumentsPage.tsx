'use client'

import {Button, Title} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './DocumentsPage.module.css'
import {motion} from 'framer-motion'
import {Document} from './ui'
import {theme} from '@/shared/model'
import {IDocumentProps} from './ui/Document'
import useGetMoreItem from '@/shared/model/useGetMoreItem'

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
  const {handleShowMoreDocuments, getDelay, postsToShow} = useGetMoreItem(
    documentMock,
    5
  )

  return (
    <motion.div
      className={`${themeStyles.container} ${styles.container}`}
      initial='hidden'
      animate='visible'
    >
      <Title className={styles.title} animation={theme.animations.opacity}>
        Документы
      </Title>
      <ul className={styles.listContainer}>
        {postsToShow.map((document) => (
          <Document
            file={(document as IDocumentProps).file}
            title={document.title}
            date={document.date}
            delay={getDelay(document.id)}
            key={document.id}
          />
        ))}
      </ul>
      {documentMock.length > postsToShow.length && (
        <Button
          animation={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.6,
              },
            },
          }}
          isMore
          onClick={handleShowMoreDocuments}
        >
          Показать ещё
        </Button>
      )}
    </motion.div>
  )
}

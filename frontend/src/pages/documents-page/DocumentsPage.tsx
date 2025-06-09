'use client'

import {Button, Skeleton, Title} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './DocumentsPage.module.css'
import {motion} from 'framer-motion'
import {Document} from './ui'
import {theme} from '@/shared/model'
import {IDocumentProps} from './ui/Document'
import useGetMoreItem from '@/shared/model/useGetMoreItem'
import {useEffect, useState} from 'react'

const documentMock = [
  {
    id: 1,
    file: 'wordFile',
    title: 'Акт приёма-передачи квартиры',
    date: '11.06.2024',
    href: '/documents/akt-priema-peredachi.docx',
  },
  {
    id: 2,
    file: 'pdfFile',
    title: 'Договор купли-продажи',
    date: '20.06.2024',
    href: '/documents/dogovor-kupli-prodazhi.pdf',
  },
  {
    id: 3,
    file: 'pdfFile',
    title: 'Проектная документация',
    date: '08.07.2024',
    href: '/documents/proektnaya-dokumentatsiya.pdf',
  },
  {
    id: 4,
    file: 'pdfFile',
    title: 'Политика конфиденциальности',
    date: '10.07.2024',
    href: '/documents/politika-konfidencialnosti.pdf',
  },
  {
    id: 5,
    file: 'pdfFile',
    title: 'Пользовательское соглашение',
    date: '10.07.2024',
    href: '/documents/polzovatelskoe-soglashenie.pdf',
  },
  {
    id: 6,
    file: 'pdfFile',
    title: 'Согласие на обработку персональных данных',
    date: '10.07.2024',
    href: '/documents/soglasie-na-obrabotku-dannyh.pdf',
  },
  {
    id: 7,
    file: 'pdfFile',
    title: 'Согласие на обработку персональных данных',
    date: '10.07.2024',
    href: '/documents/oferta.pdf',
  },
  {
    id: 8,
    file: 'wordFile',
    title: 'Инструкция по оформлению кредита',
    date: '10.07.2024',
    href: '/documents/instruktsiya-po-oformleniyu.docx',
  },
  {
    id: 9,
    file: 'pdfFile',
    title: 'Частые вопросы',
    date: '10.07.2024',
    href: '/documents/chastye-voprosy.pdf',
  },
    {
    id: 10,
    file: 'wordFile',
    title: 'Акт приёма-передачи квартиры',
    date: '11.06.2024',
    href: '/documents/akt-priema-peredachi.docx',
  },
  {
    id: 11,
    file: 'pdfFile',
    title: 'Договор купли-продажи',
    date: '20.06.2024',
    href: '/documents/dogovor-kupli-prodazhi.pdf',
  },
  {
    id: 12,
    file: 'pdfFile',
    title: 'Проектная документация',
    date: '08.07.2024',
    href: '/documents/proektnaya-dokumentatsiya.pdf',
  },
  {
    id: 13,
    file: 'pdfFile',
    title: 'Политика конфиденциальности',
    date: '10.07.2024',
    href: '/documents/politika-konfidencialnosti.pdf',
  },
  {
    id: 14,
    file: 'pdfFile',
    title: 'Пользовательское соглашение',
    date: '10.07.2024',
    href: '/documents/polzovatelskoe-soglashenie.pdf',
  },
  {
    id: 15,
    file: 'pdfFile',
    title: 'Согласие на обработку персональных данных',
    date: '10.07.2024',
    href: '/documents/soglasie-na-obrabotku-dannyh.pdf',
  },
  {
    id: 16,
    file: 'pdfFile',
    title: 'Согласие на обработку персональных данных',
    date: '10.07.2024',
    href: '/documents/oferta.pdf',
  },
  {
    id: 17,
    file: 'wordFile',
    title: 'Инструкция по оформлению кредита',
    date: '10.07.2024',
    href: '/documents/instruktsiya-po-oformleniyu.docx',
  },
  {
    id: 18,
    file: 'pdfFile',
    title: 'Частые вопросы',
    date: '10.07.2024',
    href: '/documents/chastye-voprosy.pdf',
  },
]

const DocumentsSkeleton = () => {
  return (
    <div className={styles.documentsContainerSkeleton}>
      <div className={styles.skeletonContent}>
        <Skeleton width='10%' height='50px' />
        <Skeleton width='50%' height='40px' />

        <Skeleton width='10%' height='30px' />
        <Skeleton width='15%' height='50px' />
      </div>
    </div>
  )
}

export function DocumentsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const {handleShowMoreItems, getDelay, dataToShow} = useGetMoreItem(
    documentMock,
    5
  )

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <motion.div
      className={`${themeStyles.container} ${styles.container}`}
      initial='hidden'
      animate='visible'
    >
      <Title className={styles.title} animation={theme.animations.opacity}>
        Документы
      </Title>
      {isLoading ? (
        <div className={styles.skelenonContainer}>
          <DocumentsSkeleton />
          <DocumentsSkeleton />
          <DocumentsSkeleton />
          <DocumentsSkeleton />
          <DocumentsSkeleton />
          <DocumentsSkeleton />
        </div>
      ) : (
        <>
          <ul className={styles.listContainer}>
            {dataToShow.map((document, index) => (
              <Document
                file={(document as IDocumentProps).file}
                title={document.title}
                date={document.date}
                href={document.href}
                delay={getDelay(index)}
                key={document.id}
              />
            ))}
          </ul>
          {documentMock.length > dataToShow.length && (
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
              onClick={handleShowMoreItems}
            >
              Показать ещё
            </Button>
          )}
        </>
      )}
    </motion.div>
  )
}

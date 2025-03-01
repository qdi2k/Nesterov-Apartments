'use client'

import {Button, Text, Title} from '@/shared/ui'
import styles from './Blogs.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image, {type StaticImageData} from 'next/image'
import blogImage1 from '@/shared/assets/images/ourProject1.png'
import blogImage2 from '@/shared/assets/images/ourProject2.png'
import blogImage3 from '@/shared/assets/images/ourProject3.png'
import blogImage4 from '@/shared/assets/images/ourProject4.png'
import Link from 'next/link'

const MOCK_BLOGS = [
  {
    id: 1,
    title: 'Современный комфорт в гармонии с природой',
    src: blogImage1,
    description:
      'Жилой комплекс Nesterov — это уникальное сочетание современной архитектуры, продуманной инфраструктуры и зеленых зон. Узнайте, как мы умеем писать текст бла балаб аувп2311',
  },
  {
    id: 2,
    title: 'Как мы создаем зеленый жилой комплекс',
    src: blogImage2,
    description:
      'Использование экологически чистых материалов, озелененные зоны и энергоэффективные технологии — узнайте, как ЖК Nesterov заботится',
  },
  {
    id: 3,
    title: 'Место, где начинается ваша новая жизнь',
    src: blogImage3,
    description:
      'Жилой комплекс Nesterov — это не просто место для жизни, это пространство, где вы сможете реализовать свои мечты. Узнайте, как мы создаем дома',
  },
  {
    id: 4,
    title: 'Всё про инфраструктуру ЖК Nesterov',
    src: blogImage4,
    description:
      'Детские площадки, зоны отдыха, магазины и собственный сквер — рассказываем, как мы создаем инфраструктуру, которая делает жизнь в ЖК Nesterov',
  },
]

interface BlogProps {
  title: string
  description: string
  src: StaticImageData
}

const Blog = ({title, description, src}: BlogProps) => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.image}>
        <Image className={styles.image} src={src} alt='blog-image' fill />
      </div>
      <div className={styles.textContainer}>
        <Text weight='semiBold' size='xSmall'>
          {title}
        </Text>
        <div className={styles.descriptionContainer}>
          <Text className={styles.description}>{description}</Text>
        </div>
        <div className={styles.bottomText}>
          <Text weight='medium'>22.02.2024</Text>
          <Link href='/news-item'>
            <Text color='orange' className={styles.link}>
              Подробнее
            </Text>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Blogs() {
  return (
    <section className={`${styles.container} ${themeStyles.container}`}>
      <Title>Делимся новостями</Title>
      <div className={styles.blogsContainer}>
        {MOCK_BLOGS.map((item) => (
          <Blog
            key={item.id}
            title={item.title}
            src={item.src}
            description={item.description}
          />
        ))}
      </div>
      <Button className={styles.button} href='/news'>
        Открыть все статьи
      </Button>
    </section>
  )
}

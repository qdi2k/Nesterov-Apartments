'use client'

import {Text, Title} from '@/shared/ui'
import styles from './AboutUs.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import Image from 'next/image'
import aboutImage from '@/shared/assets/images/about.jpg'

const MOCK_ABOUT_DATA = [
  {
    id: 1,
    title: '12 лет',
    description:
      'Уже 12 лет мы создаем дома, которые становятся настоящим уютным гнездышком для наших клиентов',
    rows: 1,
  },
  {
    id: 2,
    title: 'Индивидуальный подход',
    description:
      'Мы предлагаем индивидуальные планировки и гибкие решения, чтобы ваш дом был именно таким, каким вы его представляете. От проекта до сдачи — мы с вами на каждом этапе.',
    rows: 2,
  },
  {
    id: 3,
    title: 'Работаем с банками',
    description:
      'Мы сотрудничаем с ведущими банками, чтобы сделать покупку дома максимально удобной. Наши дома аккредитованы для ипотеки, что позволяет вам воплотить мечту о собственном жилье без лишних хлопот.',
    rows: 3,
  },
  {
    id: 4,
    title: '5 лет',
    description:
      'Предоставляем официальную гарантию на 5 лет от строительной компании. Все обязательства и сроки четко зафиксированы в договоре',
    rows: 2,
  },
  {
    id: 5,
    title: '23 объекта',
    description:
      'Построили на Байкальском тракте за 2021 год, в рамках коттеджного посёлка',
    rows: 1,
  },
]

interface AboutItemProps {
  title: string
  description: string
  id: number
  rows: number
}

const AboutItem = ({title, description, id, rows}: AboutItemProps) => {
  return (
    <div
      className={styles.itemContainer}
      style={{
        gridArea: `item${id}`,
        gridRow: `span ${rows}`,
      }}
    >
      <div className={styles.content}>
        <Text size='sMedium' weight='bold'>
          {title}
        </Text>
        <Text>{description}</Text>
      </div>
      {id === 3 && (
        <div className={styles.logoContainer}>
          <div className={styles.iconLogo1}></div>
          <div className={styles.iconLogo2}></div>
          <div className={styles.iconLogo3}></div>
        </div>
      )}
    </div>
  )
}

export function AboutUs() {
  return (
    <section className={`${themeStyles.container} ${styles.container}`}>
      <Title>О компании</Title>
      <div className={styles.aboutContent}>
        <div className={styles.image}>
          <Image
            className={styles.image}
            src={aboutImage}
            alt='about-image'
            fill
            sizes='100%'
          />
        </div>
        <div className={styles.textContainer}>
          <Text size='large' weight='semiBold'>
            Nesterov – финансово-строительная группа
          </Text>
          <Text>
            Группа выполняет полный цикл работ от проектирования до эксплуатации
            введенной недвижимости. Компании Группы обладают высокими
            компетенциями в части технологий проектирования, строительства и
            производства. Собственный производственно-строительный блок
            позволяет осуществлять монолитные и фасадные работы, выполнять
            отделку помещений. Предприятия Группы обладают собственным парком
            строительной техники и имеют опыт в проведении лабораторных
            испытаний строительных материалов.
          </Text>
        </div>
      </div>
      <div className={styles.listContainer}>
        {MOCK_ABOUT_DATA.map((item) => (
          <AboutItem
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
            rows={item.rows}
          />
        ))}
      </div>
    </section>
  )
}

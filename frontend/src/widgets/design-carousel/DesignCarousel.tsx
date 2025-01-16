import {Carousel} from '@/entities/carousel'
import {SubstrateButton, Title} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './DesignCarousel.module.css'

const mockData = [
  {
    id: 1,
    title: 'Фасады',
    tabData: [
      {
        id: 1,
        title: 'Вас встретит здание, в которое приятно заходить 1',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 2,
        title: 'Вас встретит здание, в которое приятно заходить 2',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 3,
        title: 'Вас встретит здание, в которое приятно заходить 3',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 4,
        title: 'Вас встретит здание, в которое приятно заходить 4',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 5,
        title: 'Вас встретит здание, в которое приятно заходить 5',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 6,
        title: 'Вас встретит здание, в которое приятно заходить 6',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
    ],
  },
  {
    id: 2,
    title: 'Входные группы',
    tabData: [
      {id: 1, title: '213', description: '213123', img: '/1'},
      {id: 2, title: '213', description: '213123', img: '/1'},
      {id: 3, title: '213', description: '213123', img: '/1'},
      {id: 4, title: '213', description: '213123', img: '/1'},
    ],
  },
  {
    id: 3,
    title: 'Отделка',
    tabData: [
      {id: 1, title: '213', description: '213123', img: '/1'},
      {id: 2, title: '213', description: '213123', img: '/1'},
      {id: 3, title: '213', description: '213123', img: '/1'},
      {id: 4, title: '213', description: '213123', img: '/1'},
    ],
  },
  {
    id: 4,
    title: 'Места общего пользования',
    tabData: [
      {id: 1, title: '213', description: '213123', img: '/1'},
      {id: 2, title: '213', description: '213123', img: '/1'},
      {id: 3, title: '213', description: '213123', img: '/1'},
      {id: 4, title: '213', description: '213123', img: '/1'},
    ],
  },
]

export function DesignCarousel() {
  return (
    <section className={styles.container}>
      <div className={`${themeStyles.container} ${styles.titleContainer}`}>
        <Title>Разработали и воплотили в жизнь комфортный дизайн</Title>
      </div>
      <Carousel mockData={mockData} />
      <SubstrateButton
        className={styles.substrateButtonContainer}
        textButton='Получить'
        inputPlaceholder='Email'
      >
        Получить подборку дизайнерских решений
      </SubstrateButton>
      <div className={styles.backgroundColor} />
    </section>
  )
}

import {Carousel} from '@/entities/carousel'
import {MainTitle} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './HistoryCarousel.module.css'

const mockData = [
  {
    id: 1,
    title: 'Апрель 2021',
    tabData: [
      {
        id: 1,
        title: 'Заголовок хода строительства за июнь 2021 года',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 2,
        title: 'Заголовок хода строительства за июнь 2021 года',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 3,
        title: 'Заголовок хода строительства за июнь 2021 года',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
      {
        id: 4,
        title: 'Заголовок хода строительства за июнь 2021 года',
        description:
          'Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками.',
        img: '/1',
      },
    ],
  },
  {
    id: 2,
    title: 'Май 2021',
    tabData: [
      {id: 1, title: 'Май', description: '213123', img: '/1'},
      {id: 2, title: '213', description: '213123', img: '/1'},
      {id: 3, title: '213', description: '213123', img: '/1'},
      {id: 4, title: '213', description: '213123', img: '/1'},
    ],
  },
  {
    id: 3,
    title: 'Июнь 2021',
    tabData: [
      {id: 1, title: '213', description: '213123', img: '/1'},
      {id: 2, title: '213', description: '213123', img: '/1'},
      {id: 3, title: '213', description: '213123', img: '/1'},
      {id: 4, title: '213', description: '213123', img: '/1'},
    ],
  },
  {
    id: 4,
    title: 'Июль 2021',
    tabData: [
      {id: 1, title: '213', description: '213123', img: '/1'},
      {id: 2, title: '213', description: '213123', img: '/1'},
      {id: 3, title: '213', description: '213123', img: '/1'},
      {id: 4, title: '213', description: '213123', img: '/1'},
    ],
  },
]

export function HistoryCarousel() {
  return (
    <>
      <div className={`${themeStyles.container} ${styles.container}`}>
        <MainTitle>Ход строительства</MainTitle>
      </div>
      <Carousel mockData={mockData} isArrow />
    </>
  )
}

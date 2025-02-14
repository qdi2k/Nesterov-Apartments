import {AdvantageItem} from './ui'
import styles from './Advantage.module.css'
import {type IconName} from '../icon/Icon'

type Data = {
  id: number
  icon: IconName
  title: string
  description: string
}
interface AdvantageProps {
  data: Data[]
}

export function Advantage({data}: AdvantageProps) {
  return (
    <ul className={styles.listContainer}>
      {data.map((item) => (
        <li key={item.id}>
          <AdvantageItem
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  )
}

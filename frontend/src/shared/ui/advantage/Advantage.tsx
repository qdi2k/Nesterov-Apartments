import {Icon, Text} from '@/shared/ui'
import styles from './Advantage.module.css'
import {type IconName} from '../icon/Icon'

interface IAdvantageProps {
  icon: IconName
  title: string
  description: string
}

export function Advantage({icon, title, description}: IAdvantageProps) {
  return (
    <div className={styles.container}>
      <Icon name={icon} size={223} />
      <Text size='sMedium' color='brown' className={styles.title}>
        {title}
      </Text>
      <Text>{description}</Text>
    </div>
  )
}

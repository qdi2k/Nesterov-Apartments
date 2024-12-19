import {Input, Text, TextButton} from '@/shared/ui'
import styles from './RouteMap.module.css'

export function RouteMap() {
  return (
    <div className={styles.containerRoute}>
      <div className={styles.image} />
      <div className={styles.routeContainer}>
        <Text size='xMedium' weight='light' className={styles.title}>
          Проложить маршрут
        </Text>
        <Input placeholder='Ваше местоположение' />
        <TextButton color='black'>Показать маршрут</TextButton>
      </div>
    </div>
  )
}

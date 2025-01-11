import {ApartmentCard} from '../apartment-card'
import styles from './SelectContent.module.css'

interface ISelectContentProps {
  activeSelect: number
}

const mockData = [{id: 1}, {id: 2}, {id: 3}]

export function SelectContent({activeSelect}: ISelectContentProps) {
  const getStyles = () => {
    if (activeSelect === 1) {
      return styles.content1
    }
    if (activeSelect === 2) {
      return styles.content2
    }
    if (activeSelect === 3) {
      return styles.content3
    }
    return
  }
  return (
    <section className={styles.container}>
      <div className={getStyles()} />
      {activeSelect === 4 && (
        <ul className={styles.listContainer}>
          {mockData.map((item) => (
            <ApartmentCard key={item.id} />
          ))}
        </ul>
      )}
    </section>
  )
}

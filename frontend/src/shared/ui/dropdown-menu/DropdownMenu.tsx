'use client'

import {useState} from 'react'
import {Icon, Text} from '@/shared/ui'
import styles from './DropdownMenu.module.css'
import {type IconName} from '../icon/Icon'

type Data = {
  id: number
  city: string
}

interface IDropdownMenuProps {
  title: string
  changeTitle: (item: string) => void
  icon: IconName
  data: Data[]
  className?: string
}

export function DropdownMenu({
  title,
  changeTitle,
  icon,
  data,
  className,
}: IDropdownMenuProps) {
  const [isVisible, setIsVisible] = useState(false)

  const onClick = (item: string) => {
    changeTitle(item)
    setIsVisible(false)
  }
  return (
    <div className={`${styles.container} ${className}`}>
      <button
        className={`${styles.button} ${styles.buttonContainer}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {icon && <Icon name={icon} size={27} color='brown' />}
        <Text>{title}</Text>
      </button>
      <ul
        className={`${styles.dropdown} ${isVisible && styles.open}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {data.map((item) => (
          <button
            className={styles.button}
            onClick={() => onClick(item.city)}
            key={item.id}
          >
            {icon && <Icon name={icon} size={27} color='brown' />}
            <Text>{item.city}</Text>
          </button>
        ))}
      </ul>
    </div>
  )
}

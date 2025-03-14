'use client'

import {Icon, Text} from '@/shared/ui'
import styles from './InputSelect.module.css'
import {useEffect, useRef, useState} from 'react'

const MOCK_SORT = [
  {id: 1, title: 'Сначала дешевле'},
  {id: 2, title: 'Сначала дороже'},
  {id: 3, title: 'Сначала меньше площадь'},
  {id: 4, title: 'Сначала больше площадь'},
]

export function InputSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [sortActive, setSortActive] = useState('Выберите сортировку')
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClickItem = (title: string) => {
    setSortActive(title)
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false)
        return
      }
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [isOpen])

  return (
    <div className={styles.selectRoomContainer}>
      <div className={styles.selectDropdown} ref={containerRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.selectDropdownTitle}
        >
          <Text color='grey'>{sortActive}</Text>
          <Icon
            name='arrowSmall'
            color='grey'
            className={`${styles.arrow} ${isOpen && styles.arrowActive}`}
            size={12}
          />
        </div>
        <div className={`${styles.sortItems} ${isOpen && styles.open}`}>
          {MOCK_SORT.map((item) => (
            <Text
              className={styles.sortItem}
              onClick={() => handleClickItem(item.title)}
              key={item.id}
            >
              {item.title}
            </Text>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import styles from './Select.module.css'
import {Icon, Text} from '@/shared/ui'
import {useEffect, useRef, useState} from 'react'

type Data = {
  id: number
  value: number
}

interface ISelectProps {
  data: Data[]
  placeholder: string
  changeSelect: (id: number) => void
  selectId: number
  value: number | null
  changeValue: (id: number) => void
}

export function Select({
  data,
  placeholder,
  changeSelect,
  selectId,
  value,
  changeValue,
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const currentText = value ? `${placeholder} ${value}` : placeholder

  const onClick = (currentValue: number) => {
    changeValue(currentValue)
    if (!value && selectId < 4) {
      changeSelect(selectId + 1)
    }
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
    <div ref={containerRef}>
      <button className={styles.container} onClick={() => setIsOpen(!isOpen)}>
        <Text size='small' color={!value ? 'grey' : 'brown'}>
          {currentText}
        </Text>
        <Icon
          name='selectArrow'
          size={14}
          className={`${styles.arrow} ${isOpen && styles.arrowClicked}`}
        />
      </button>
      <ul className={`${styles.listContainer} ${isOpen && styles.open}`}>
        {data.map((item) => (
          <button
            key={item.id}
            className={styles.value}
            onClick={() => onClick(item.value)}
          >
            <Text size='small' color='brown'>
              {`${placeholder} ${item.value}`}
            </Text>
          </button>
        ))}
      </ul>
    </div>
  )
}

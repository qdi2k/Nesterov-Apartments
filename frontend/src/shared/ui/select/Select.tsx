'use client'

import styles from './Select.module.css'
import {Icon, Text} from '@/shared/ui'
import {useEffect, useRef, useState} from 'react'

type Data = {
  id: number
  value: string
}

interface ISelectProps {
  data: Data[]
  placeholder: string
  setSection: (id: number) => void
  selectId: number
}

export function Select({
  data,
  placeholder,
  setSection,
  selectId,
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const onClick = (value: string) => {
    setSelectValue(value)
    if (!selectValue && selectId < 4) {
      setSection(selectId + 1)
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
        <Text size='small' color={!selectValue ? 'grey' : 'brown'}>
          {selectValue ?? placeholder}
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
              {item.value}
            </Text>
          </button>
        ))}
      </ul>
    </div>
  )
}

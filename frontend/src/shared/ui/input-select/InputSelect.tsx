'use client'

import {Checkbox, Icon, Text} from '@/shared/ui'
import styles from './InputSelect.module.css'
import {useEffect, useRef, useState} from 'react'

interface InputSelectProps {
  placeHolder?: string
  sortItems: any
  isCheck?: boolean
}

export function InputSelect({
  placeHolder = 'Выберите сортировку',
  sortItems,
  isCheck,
}: InputSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [sortActive, setSortActive] = useState([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClickItem = (title: string) => {
    if (isCheck) {
      setSortActive((prevItems) =>
        prevItems.includes(title)
          ? prevItems.filter((i) => i !== title)
          : [...prevItems, title]
      )
      return
    }
    setSortActive([title])
    setIsOpen(false)
  }

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setSortActive([])
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
    <div className={styles.selectDropdown} ref={containerRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.selectDropdownTitle}
      >
        <div className={styles.textContainer}>
          <Text color={!sortActive[0] ? 'grey' : 'greyDark'}>
            {sortActive[0] ?? placeHolder}
          </Text>
          {sortActive.length > 1 && (
            <Text color='grey' className={styles.count}>
              +{sortActive.length - 1}
            </Text>
          )}
        </div>
        <div className={styles.iconsContainer}>
          <button
            onClick={handleCloseClick}
            className={`${styles.buttonDelete} ${sortActive[0] && styles.buttonDeleteActive}`}
          >
            <Icon name='close' size={18} className={styles.close} />
          </button>
          <Icon
            name='arrowSmall'
            color='grey'
            className={`${styles.arrow} ${isOpen && styles.arrowActive}`}
            size={14}
          />
        </div>
      </div>
      <div
        className={`${styles.scrollContainer} ${isCheck && styles.scroll} ${isOpen && styles.open}`}
      >
        <div className={`${styles.sortItems} `}>
          {sortItems.map((item) =>
            isCheck ? (
              <Checkbox
                key={item.id}
                text={item.title}
                isChecked={sortActive.includes(item.title)}
                onChange={() => handleClickItem(item.title)}
                className={`
                  ${
                    sortActive.includes(item.title)
                      ? styles.sortItemActive
                      : styles.sortItem
                  } ${styles.sortItemScroll}
                `}
              />
            ) : (
              <Text
                key={item.id}
                className={
                  sortActive[0] === item.title
                    ? styles.sortItemActive
                    : styles.sortItem
                }
                onClick={() => handleClickItem(item.title)}
              >
                {item.title}
              </Text>
            )
          )}
        </div>
      </div>
    </div>
  )
}

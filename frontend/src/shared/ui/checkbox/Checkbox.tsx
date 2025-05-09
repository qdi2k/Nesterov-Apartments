import {ReactNode} from 'react'
import {Icon} from '../icon'
import {Text} from '../text'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  text?: string
  children?: ReactNode
  onChange?: () => void
  isChecked: boolean
  className?: string
}

export function Checkbox({
  text,
  children,
  onChange,
  isChecked,
  className,
}: CheckboxProps) {
  return (
    <label className={`${styles.customCheckbox} ${className}`}>
      <div className={styles.checkboxContainer}>
        <input
          type='checkbox'
          value={text}
          onChange={onChange}
          checked={isChecked}
        />
        {isChecked && (
          <Icon
            name='check'
            color='white'
            size={10}
            className={styles.iconCheck}
          />
        )}
      </div>
      {children ?? <Text>{text}</Text>}
    </label>
  )
}

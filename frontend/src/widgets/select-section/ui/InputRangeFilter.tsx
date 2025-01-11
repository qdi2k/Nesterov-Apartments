import {InputRange, Text} from '@/shared/ui'
import styles from './Item.module.css'

type Value = {
  min: number
  max: number
}

interface IInputRangeFilterProps {
  title: string
  value: Value
  changeValue: (event: Value) => void
  max: number
  min: number
  step: number
}

export function InputRangeFilter({
  title,
  value,
  changeValue,
  max,
  min,
  step,
}: IInputRangeFilterProps) {
  const formatedValue = String(value.min)
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return (
    <div>
      <Text size='small' className={styles.inputTitle}>
        {title}
      </Text>
      <InputRange
        value={value}
        formatedValue={formatedValue}
        max={max}
        min={min}
        step={step}
        changeValue={changeValue}
        isMultiRange
      />
    </div>
  )
}

import {InputRange, Text} from '@/shared/ui'
import styles from './InputRangeForm.module.css'
import {IInputRangeProps} from '@/shared/ui/input-range/InputRange'

interface IInputRangeFormProps extends IInputRangeProps {
  nameForm: string
  valueText?: string
}

export function InputRangeForm({
  nameForm,
  max,
  min,
  step,
  value,
  valueMark,
  valueText,
  changeValue,
}: IInputRangeFormProps) {
  const formatedValue = String(value.min)
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Text size='sMedium' weight='light' isUppercase>
          {nameForm}
        </Text>
        <div className={styles.textFormValue}>
          <Text size='sMedium' weight='semiBold' color='brown' isUppercase>
            {formatedValue} {valueMark} {valueText}
          </Text>
        </div>
      </div>
      <InputRange
        max={max}
        min={min}
        step={step}
        value={value}
        formatedValue={formatedValue}
        valueMark={valueMark}
        changeValue={changeValue}
      />
    </div>
  )
}

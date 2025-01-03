import {InputRange, Text} from '@/shared/ui'
import styles from './InputRangeForm.module.css'
import {IInputRangeProps} from '@/shared/ui/input-range/InputRange'

interface IInputRangeFormProps extends IInputRangeProps {
  nameForm: string
}

export function InputRangeForm({
  tooltipId,
  inputId,
  nameForm,
  maxValue,
  minValue,
  step,
  value,
  valueMark,
  changeValue,
}: IInputRangeFormProps) {
  const formatedValue = value
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Text size='xMedium' weight='light' className={styles.text}>
          {nameForm}
        </Text>
        <Text
          size='xMedium'
          weight='semiBold'
          color='brown'
          className={styles.text}
        >
          {formatedValue} {valueMark}
        </Text>
      </div>
      <InputRange
        tooltipId={tooltipId}
        inputId={inputId}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        value={value}
        formatedValue={formatedValue}
        valueMark={valueMark}
        changeValue={changeValue}
      />
    </div>
  )
}

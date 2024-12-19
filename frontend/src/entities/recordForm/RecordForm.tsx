import {Button} from '@/shared/ui'
import {Text} from '@/shared/ui/text/Text'
import styles from './RecordForm.module.css'
import {Input} from '@/shared/ui/input'

interface IRecordFormProps {
  className?: string
}

export function RecordForm({className}: IRecordFormProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Text className={styles.title} size='medium'>
        Заполните форму и наш менеджер <br /> свяжется с вами в ближаейшее время
      </Text>
      <div className={styles.fieldsContainer}>
        <Input placeholder='Имя' />
        <Input placeholder='Email / Телефон' />
        <Button>Отравить</Button>
      </div>
    </div>
  )
}

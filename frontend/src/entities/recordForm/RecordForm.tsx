import {Text, Input, Button} from '@/shared/ui'
import styles from './RecordForm.module.css'

interface IRecordFormProps {
  className?: string
}

export function RecordForm({className}: IRecordFormProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Text className={styles.title} size='xMedium' weight='light'>
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

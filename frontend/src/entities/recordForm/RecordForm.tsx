import {Text, Input, Button} from '@/shared/ui'
import styles from './RecordForm.module.css'

interface IRecordFormProps {
  className?: string
}

export function RecordForm({className}: IRecordFormProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Text className={styles.title} size='sMedium' weight='light'>
        Заполните форму и наш менеджер <br /> свяжется с вами в ближаейшее время
      </Text>
      <div className={styles.fieldsContainer}>
        <Input placeholder='Имя' className={styles.inputField} />
        <Input placeholder='Email / Телефон' className={styles.inputField}/>
        <Button className={styles.formButton}>Отравить</Button>
      </div>
    </div>
  )
}

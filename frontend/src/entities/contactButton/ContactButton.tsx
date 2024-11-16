import Icon from '@/shared/icon/Icon'
import Text from '@/shared/text/Text'
import styles from './ContactButton.module.css'

interface IContactButtonProps {
  className?: string
}

export default function ContactButton({className}: IContactButtonProps) {
  return (
    <div className={className}>
      <div className={styles.phone}>
        <Icon name='phone' size={23} color='white' className={styles.phoneIcon} />
        <Text size='small' color='white'>+7 495 419-15-18</Text>
      </div>
      <Text
        size='small'
        weight='semiBold'
        color='white'
        className={styles.contactText}
      >
        Заказать звонок
      </Text>
    </div>
  )
}

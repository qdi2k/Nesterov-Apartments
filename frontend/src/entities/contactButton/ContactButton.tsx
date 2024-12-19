import {Icon, Text} from '@/shared/ui'
import {type FontColors} from '@/shared/model'
import styles from './ContactButton.module.css'

interface IContactButtonProps {
  className?: string
  color?: FontColors
  phoneColor?: FontColors
}

export function ContactButton({
  className,
  color = 'white',
  phoneColor = 'white',
}: IContactButtonProps) {
  return (
    <div className={`${styles.contactButton} ${className}`}>
      <div className={styles.phone}>
        <Icon
          name='phone'
          size={23}
          color={color}
          className={styles.phoneIcon}
        />
        <Text size='small' color={phoneColor}>
          +7 495 419-15-18
        </Text>
      </div>
      <button className={styles.contactText}>
        <Text size='small' weight='semiBold' color={color}>
          Заказать звонок
        </Text>
      </button>
    </div>
  )
}

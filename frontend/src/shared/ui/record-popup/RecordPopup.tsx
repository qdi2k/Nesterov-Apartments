import {Button, Text, Icon, Input} from '@/shared/ui'
import styles from './RecordPopup.module.css'

interface RecordPopupProps {
  isOpen: boolean
  closeRecord: () => void
}

export function RecordPopup({isOpen, closeRecord}: RecordPopupProps) {
  return (
    <div
      className={`${styles.overlay} ${!isOpen && styles.overlayClosed}`}
      onClick={closeRecord}
    >
      <div
        className={`${styles.content} ${!isOpen && styles.contentClosed}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.headerRecord}>
          <Text weight='semiBold' size='xMedium'>
            Забронировать
          </Text>
          <button onClick={closeRecord}>
            <Icon
              name='close'
              size={30}
              color='greyDark'
              className={styles.closeIcon}
            />
          </button>
        </div>
        <div className={styles.form}>
          <Input placeholder='Ваше имя' />
          <Input placeholder='Ваш email / телефон' />
          <label className={styles.customCheckbox}>
            <input type='checkbox' />
            <Text>
              Даю <span className={styles.approve}>согласие</span> на обработку
              персональных данных.
            </Text>
          </label>
          <label className={styles.customCheckbox}>
            <input type='checkbox' />
            <Text>
              Даю <span className={styles.approve}>согласие</span> на получение
              рекламных предложений.
            </Text>
          </label>
          <Button className={styles.formButton}>Оставить заявку</Button>
        </div>
      </div>
    </div>
  )
}

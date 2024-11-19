import {ReactNode} from 'react'
import Text from '@/entities/text/Text'
import {type Colors} from '@/shared/constants/colors'
import themeStyles from '@/shared/styles/theme.module.css'
import styles from './Button.module.css'
import Icon from '@/entities/icon/Icon'

interface IButtonProps {
  children: ReactNode
  textColor?: Colors
}

export default function Button({children, textColor}: IButtonProps) {
  return (
    <button className={styles.button}>
      <div
        className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}
      />
      <Text
        size='small'
        weight='semiBold'
        color={textColor}
        className={styles.text}
      >
        {children}
      </Text>
      <Icon name='arrow' size={17} color='black'></Icon>
    </button>
  )
}

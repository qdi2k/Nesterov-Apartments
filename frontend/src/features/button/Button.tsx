
import Text from '@/entities/text/Text'
import {type Colors} from '@/shared/constants/colors'
import themeStyles from '@/shared/styles/theme.module.css'
import styles from './Button.module.css'

interface IButtonProps {
  textColor?: Colors
}

export default function Button({textColor}: IButtonProps) {
  return (
    <button className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}>
      <Text size='small' weight='semiBold' color={textColor} className={styles.text}>Отправить</Text>
    </button>
  );
}

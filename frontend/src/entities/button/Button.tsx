import Text, {Colors} from '@/shared/text/Text'
import themeStyles from '@/shared/theme.module.css'
import styles from './Button.module.css'

interface IButtonProps {
  textColor?: Colors
}

export default function Button({textColor}: IButtonProps) {
  return (
    <button className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}>
      <Text size='small' weight='semiBold' color={textColor} style={styles.text}>Отправить</Text>
    </button>
  );
}

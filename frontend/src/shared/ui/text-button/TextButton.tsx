import {ReactNode} from 'react'
import {Icon, Text} from '@/shared/ui'
import styles from './TextButton.module.css'
import {FontColors} from '@/shared/model'
import {motion, type Variants} from 'framer-motion'

interface IButtonProps {
  children: ReactNode
  className?: string
  color?: FontColors
  animation?: Variants
  onClick?: () => void
}

export function TextButton({
  children,
  className,
  color = 'brown',
  animation,
  onClick,
}: IButtonProps) {
  return (
    <motion.button
      className={`${styles.textButton} ${className}`}
      variants={animation}
      onClick={onClick}
    >
      <Text size='small' weight='semiBold' color={color}>
        {children}
      </Text>
      <Icon name='arrow' size={17} color={color} className={styles.icon} />
    </motion.button>
  )
}

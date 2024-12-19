import {ReactNode} from 'react'
import {Icon, Text} from '@/shared/ui'
import styles from './TextButton.module.css'
import {FontColors} from '@/shared/model'

interface IButtonProps {
  children: ReactNode
  className?: string
  color?: FontColors
}

export function TextButton({
  children,
  className,
  color = 'brown',
}: IButtonProps) {
  return (
    <button className={`${styles.textButton} ${className}`}>
      <Text size='small' weight='semiBold' color={color}>
        {children}
      </Text>
      <Icon name='arrow' size={17} color={color} />
    </button>
  )
}

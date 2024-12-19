import {ReactNode} from 'react'
import {Icon, Text} from '@/shared/ui'
import styles from './TextButton.module.css'

interface IButtonProps {
  children: ReactNode
  className?: string
}

export function TextButton({children, className}: IButtonProps) {
  return (
    <button className={`${styles.textButton} ${className}`}>
      <Text size='small' weight='semiBold' color='brown'>
        {children}
      </Text>
      <Icon name='arrow' size={17} color='brown' />
    </button>
  )
}

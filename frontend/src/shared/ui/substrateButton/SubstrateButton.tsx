import {ReactNode} from 'react'
import {Text} from '@/shared/ui'
import {Button} from '@/shared/ui/button'
import styles from './SubstrateButton.module.css'

interface ISubstrateButtonProps {
  className?: string
  children: string | ReactNode
  textButton: string
}

export function SubstrateButton({
  className,
  children,
  textButton,
}: ISubstrateButtonProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Text color='white' size='xMedium' weight='light' className={styles.text}>
        {children}
      </Text>
      <Button textColor='white' textStyle={styles.buttonText}>
        {textButton}
      </Button>
    </div>
  )
}

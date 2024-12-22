import {ReactNode} from 'react'
import {Input, Text} from '@/shared/ui'
import {Button} from '@/shared/ui/button'
import styles from './SubstrateButton.module.css'

interface ISubstrateButtonProps {
  className?: string
  children: string | ReactNode
  inputPlaceholder?: string
  textButton: string
}

export function SubstrateButton({
  className,
  children,
  inputPlaceholder,
  textButton,
}: ISubstrateButtonProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Text color='white' size='xMedium' weight='light' className={styles.text}>
        {children}
      </Text>
      {inputPlaceholder && (
        <Input
          placeholder={inputPlaceholder}
          dividerClassName={styles.divider}
          inputClassName={styles.input}
        />
      )}
      <Button textColor='white' textStyle={styles.buttonText}>
        {textButton}
      </Button>
    </div>
  )
}

import {ReactNode} from 'react'
import {Input, Text} from '@/shared/ui'
import {Button} from '@/shared/ui/button'
import styles from './SubstrateButton.module.css'
import {Url} from 'next/dist/shared/lib/router/router'

interface ISubstrateButtonProps {
  className?: string
  children: string | ReactNode
  inputPlaceholder?: string
  textButton: string
  href?: Url
  onClick?: () => void
}

export function SubstrateButton({
  className,
  children,
  inputPlaceholder,
  textButton,
  onClick,
  href,
}: ISubstrateButtonProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Text color='white' size='sMedium' weight='light' className={styles.text}>
        {children}
      </Text>
      {inputPlaceholder && (
        <Input
          placeholder={inputPlaceholder}
          dividerClassName={styles.divider}
          inputClassName={styles.input}
        />
      )}
      <Button
        textColor='white'
        textStyle={styles.buttonText}
        href={href}
        onClick={onClick}
      >
        {textButton}
      </Button>
    </div>
  )
}

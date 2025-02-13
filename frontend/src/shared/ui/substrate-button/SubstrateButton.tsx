import {ReactNode} from 'react'
import {Input, Text} from '@/shared/ui'
import {Button} from '@/shared/ui/button'
import styles from './SubstrateButton.module.css'
import {Url} from 'next/dist/shared/lib/router/router'

interface ISubstrateButtonProps {
  classNameBackground?: string
  classNameContent?: string
  classNameTitle?: string
  children: string | ReactNode
  inputPlaceholder?: string
  textButton: string
  href?: Url
  onClick?: () => void
}

export function SubstrateButton({
  classNameBackground,
  classNameContent,
  classNameTitle,
  children,
  inputPlaceholder,
  textButton,
  onClick,
  href,
}: ISubstrateButtonProps) {
  return (
    <div className={`${styles.backgroundContainer} ${classNameBackground}`}>
      <div
        className={`${inputPlaceholder ? styles.containerPlaceholder : styles.container} ${classNameContent}`}
      >
        <Text
          color='white'
          size='sMedium'
          weight='light'
          className={`${styles.text} ${classNameTitle}`}
        >
          {children}
        </Text>
        <div className={styles.inputContent}>
          {inputPlaceholder && (
            <Input
              placeholder={inputPlaceholder}
              dividerClassName={styles.divider}
              inputClassName={styles.input}
              className={styles.inputContainer}
            />
          )}
          <Button
            textColor='white'
            className={styles.buttonSubmit}
            textStyle={styles.buttonText}
            href={href}
            onClick={onClick}
          >
            {textButton}
          </Button>
        </div>
      </div>
    </div>
  )
}

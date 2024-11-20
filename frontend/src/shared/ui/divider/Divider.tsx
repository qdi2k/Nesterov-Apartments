import styles from './Divider.module.css'

interface IDividerProps {
  className?: string
}

export function Divider({className}: IDividerProps) {
  return <div className={`${styles.mainDivider} ${className}`} />
}

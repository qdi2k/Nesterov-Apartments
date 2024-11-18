import styles from './Divider.module.css'

interface IDividerProps {
  className?: string
}

function Divider({className}: IDividerProps) {
  return (
    <div className={`${styles.mainDivider} ${className}`}/>
  )
}

export default Divider;
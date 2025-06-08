import styles from './Loader.module.css'

interface ILoaderProps {
  className?: string
}

export function Loader({className}: ILoaderProps) {
  return <div className={`${styles.loader} ${className}`} />
}

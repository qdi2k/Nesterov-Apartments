import styles from './Skeleton.module.css'

interface ISkeletonProps {
  width: string
  height: string
  className?: string
}

export function Skeleton({width, height, className}: ISkeletonProps) {
  return (
    <div
      className={`${styles.skeletonLoader} ${className}`}
      style={{width: width, height: height}}
    />
  )
}

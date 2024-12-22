import styles from './BurgerButton.module.css'

interface IBurgerButtonProps {
  onPress: () => void
}

export function BurgerButton({onPress}: IBurgerButtonProps) {
  return (
    <button className={`${styles.burgerButton}`} onClick={() => onPress()}>
      <div className={`${styles.burgerLine} ${styles.widthMenu1}`} />
      <div className={`${styles.burgerLine} ${styles.widthMenu2}`} />
      <div className={`${styles.burgerLine} ${styles.widthMenu3}`} />
    </button>
  )
}

import styles from './BurgerButton.module.css'

export default function BurgerButton() {
  return (
    <div className={`${styles.burgerButton}`}>
      <div className={`${styles.burgerLine} ${styles.widthMenu1}`}/>
      <div className={`${styles.burgerLine} ${styles.widthMenu2}`}/>
      <div className={`${styles.burgerLine} ${styles.widthMenu3}`}/>
    </div>
  )
}

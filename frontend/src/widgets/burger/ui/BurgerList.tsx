import {Text} from '@/shared/ui'
import Link from 'next/link'
import styles from './BurgerList.module.css'

type Links = {
  id: number
  text: string
  href: string
}

interface IBurgerListProps {
  links: Links[]
  onPress: () => void
}

export function BurgerList({links, onPress}: IBurgerListProps) {
  return (
    <ul className={styles.menuList}>
      {links.map((link) => (
        <li key={link.id} className={styles.menuItem}>
          <Link href={link.href} onClick={() => onPress()}>
            <Text size='small' color='white' isHover>
              {link.text}{' '}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  )
}

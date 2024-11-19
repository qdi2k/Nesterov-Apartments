import Text from '@/entities/text/Text'
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

function BurgerList({links, onPress}: IBurgerListProps) {
  return (
    <ul className={styles.menuList}>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.href} onClick={() => onPress()}>
            <Text color='black' size='small'>
              {link.text}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BurgerList

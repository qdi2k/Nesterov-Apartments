import {default as address} from './assets/address.svg'
import {default as appartment} from './assets/appartment.svg'
import {default as instagram} from './assets/instagram.svg'
import {default as mail} from './assets/mail.svg'
import {default as map} from './assets/map.svg'
import {default as phone} from './assets/phone.svg'
import {default as train} from './assets/train.svg'
import {default as logo} from './assets/logo.svg'

const Icons = {
  address,
  appartment,
  instagram,
  mail,
  map,
  phone,
  train,
  logo,
}

export type IconName = keyof typeof Icons

interface IIconProps {
  name: IconName
  className?: string
  style?: string
  color?: string
  size?: number
  width?: number
  height?: number
}

export default function Icon(props: IIconProps) {
    const {name, className, color = 'white', size = 16, width, height} = props

    const IconComponent = Icons?.[name]
    if (!name) {
        return null
      }

    return <IconComponent className={className} style={{color}} width={width ?? size} height={height ?? size} />
}
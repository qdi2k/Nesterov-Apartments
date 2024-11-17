import {default as address} from '@/shared/assets/icons/address.svg'
import {default as appartment} from '@/shared/assets/icons/appartment.svg'
import {default as instagram} from '@/shared/assets/icons/instagram.svg'
import {default as mail} from '@/shared/assets/icons/mail.svg'
import {default as map} from '@/shared/assets/icons/map.svg'
import {default as phone} from '@/shared/assets/icons/phone.svg'
import {default as train} from '@/shared/assets/icons/train.svg'
import {default as arrow} from '@/shared/assets/icons/arrow.svg'
import {default as logo} from '@/shared/assets/icons/logo.svg'
import {default as logoMain} from '@/shared/assets/icons/logo-main.svg'
import {type Colors, getColor} from '@/shared/constants/colors'

const Icons = {
  address,
  appartment,
  instagram,
  mail,
  map,
  phone,
  train,
  arrow,
  logo,
  logoMain,
}

export type IconName = keyof typeof Icons
interface IIconProps {
  name: IconName
  className?: string
  style?: string
  color?: Colors
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

    return (
      <IconComponent
        className={className}
        style={{color: getColor(color)}}
        width={width ?? size}
        height={height ?? size} 
      />
  )
}
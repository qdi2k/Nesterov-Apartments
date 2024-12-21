import {default as address} from '@/shared/assets/icons/address.svg'
import {default as appartment} from '@/shared/assets/icons/appartment.svg'
import {default as instagram} from '@/shared/assets/icons/instagram.svg'
import {default as mail} from '@/shared/assets/icons/mail.svg'
import {default as map} from '@/shared/assets/icons/map.svg'
import {default as phone} from '@/shared/assets/icons/phone.svg'
import {default as train} from '@/shared/assets/icons/train.svg'
import {default as arrow} from '@/shared/assets/icons/arrow.svg'
import {default as close} from '@/shared/assets/icons/close.svg'
import {default as logo} from '@/shared/assets/icons/logo.svg'
import {default as logoMain} from '@/shared/assets/icons/logo-main.svg'
import {default as wordFile} from '@/shared/assets/icons/word-file.svg'
import {default as pdfFile} from '@/shared/assets/icons/pdf-file.svg'
import {default as download} from '@/shared/assets/icons/download.svg'
import {default as timeFill} from '@/shared/assets/icons/time-fill.svg'
import {default as mapFill} from '@/shared/assets/icons/map-fill.svg'
import {default as phoneFill} from '@/shared/assets/icons/phone-fill.svg'
import {default as mailFill} from '@/shared/assets/icons/mail-fill.svg'
import {default as architect} from '@/shared/assets/icons/architect.svg'
import {default as cascade} from '@/shared/assets/icons/cascade.svg'
import {default as floor} from '@/shared/assets/icons/floor.svg'
import {default as parking} from '@/shared/assets/icons/parking.svg'
import {type IconColors, theme} from '@/shared/model'

const Icons = {
  address,
  appartment,
  instagram,
  mail,
  map,
  phone,
  train,
  arrow,
  close,
  logo,
  logoMain,
  wordFile,
  pdfFile,
  download,
  timeFill,
  mapFill,
  phoneFill,
  mailFill,
  architect,
  cascade,
  floor,
  parking,
}

export type IconName = keyof typeof Icons
interface IIconProps {
  name: IconName
  className?: string
  style?: string
  color?: IconColors
  size?: number
  width?: number
  height?: number
}

export function Icon(props: IIconProps) {
  const {name, className, color = 'black', size = 16, width, height} = props
  const IconComponent = Icons?.[name]

  if (!name) {
    return null
  }

  return (
    <IconComponent
      className={className}
      style={{color: theme.icon.colors?.[color]}}
      width={width ?? size}
      height={height ?? size}
    />
  )
}

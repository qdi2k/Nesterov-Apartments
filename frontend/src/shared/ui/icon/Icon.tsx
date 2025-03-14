import {default as address} from '@/shared/assets/icons/address.svg'
import {default as arrow} from '@/shared/assets/icons/arrow.svg'
import {default as arrowSmall} from '@/shared/assets/icons/arrow-small.svg'
import {default as close} from '@/shared/assets/icons/close.svg'
import {default as logo} from '@/shared/assets/icons/logo.svg'
import {default as logoNew} from '@/shared/assets/icons/logo-new.svg'
import {default as wordFile} from '@/shared/assets/icons/word-file.svg'
import {default as pdfFile} from '@/shared/assets/icons/pdf-file.svg'
import {default as timeFill} from '@/shared/assets/icons/time-fill.svg'
import {default as mapFill} from '@/shared/assets/icons/map-fill.svg'
import {default as phoneFill} from '@/shared/assets/icons/phone-fill.svg'
import {default as mailFill} from '@/shared/assets/icons/mail-fill.svg'
import {default as selectArrow} from '@/shared/assets/icons/select-arrow.svg'
import {default as telegram} from '@/shared/assets/icons/telegram.svg'
import {default as vkontakte} from '@/shared/assets/icons/vkontakte.svg'
import {default as instagram} from '@/shared/assets/icons/instagram.svg'
import {type IconColors, theme} from '@/shared/model'

const Icons = {
  address,
  arrow,
  arrowSmall,
  close,
  logo,
  logoNew,
  wordFile,
  pdfFile,
  timeFill,
  mapFill,
  phoneFill,
  mailFill,
  selectArrow,
  telegram,
  vkontakte,
  instagram,
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
      style={{
        color: theme.icon.colors?.[color],
        minWidth: width ?? size,
        minHeight: height ?? size,
      }}
    />
  )
}

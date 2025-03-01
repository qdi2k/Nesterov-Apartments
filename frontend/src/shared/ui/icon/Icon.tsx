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
import {default as logoNew} from '@/shared/assets/icons/logo-new.svg'
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
import {default as cafe} from '@/shared/assets/icons/cafe.svg'
import {default as hospital} from '@/shared/assets/icons/hospital.svg'
import {default as park} from '@/shared/assets/icons/park.svg'
import {default as school} from '@/shared/assets/icons/school.svg'
import {default as shop} from '@/shared/assets/icons/shop.svg'
import {default as transport} from '@/shared/assets/icons/transport.svg'
import {default as calculator} from '@/shared/assets/icons/calculator.svg'
import {default as department} from '@/shared/assets/icons/department.svg'
import {default as payment} from '@/shared/assets/icons/payment.svg'
import {default as calculatorSmall} from '@/shared/assets/icons/calculator-small.svg'
import {default as selectArrow} from '@/shared/assets/icons/select-arrow.svg'
import {default as telegram} from '@/shared/assets/icons/telegram.svg'
import {default as vkontakte} from '@/shared/assets/icons/vkontakte.svg'
import {default as instagram2} from '@/shared/assets/icons/instagram2.svg'
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
  logoNew,
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
  cafe,
  hospital,
  park,
  school,
  shop,
  transport,
  calculator,
  department,
  payment,
  calculatorSmall,
  selectArrow,
  telegram,
  vkontakte,
  instagram2,
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

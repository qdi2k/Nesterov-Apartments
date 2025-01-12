'use client'

import {MainTitle} from '@/shared/ui'
import {Record} from '@/widgets/record'
import {SelectSection} from '@/widgets/select-section'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {useState} from 'react'
import {SelectContent} from '@/widgets/select-content'

const mockApartmentData = [
  {id: 1, section: 1, floor: 1, rooms: 1, square: 60, price: 7500000},
  {id: 2, section: 1, floor: 1, rooms: 1, square: 40, price: 5500000},
  {id: 3, section: 1, floor: 1, rooms: 4, square: 50, price: 6590000},
  {id: 4, section: 1, floor: 2, rooms: 2, square: 50, price: 6200000},
  {id: 5, section: 1, floor: 2, rooms: 2, square: 57, price: 6400000},
  {id: 6, section: 1, floor: 2, rooms: 3, square: 41, price: 5500000},
  {id: 7, section: 1, floor: 3, rooms: 2, square: 81, price: 8700000},
  {id: 8, section: 1, floor: 3, rooms: 2, square: 41, price: 4200000},
  {id: 9, section: 3, floor: 8, rooms: 2, square: 80, price: 9000000},
  {id: 10, section: 3, floor: 8, rooms: 2, square: 70, price: 9000000},
]

const dataSection = [
  {id: 1, value: 1},
  {id: 2, value: 2},
  {id: 3, value: 3},
  {id: 4, value: 4},
]

const dataFloor = [
  {id: 1, value: 1},
  {id: 2, value: 2},
  {id: 3, value: 3},
  {id: 4, value: 4},
  {id: 5, value: 5},
  {id: 6, value: 6},
  {id: 7, value: 7},
  {id: 8, value: 8},
]

export function ApartmentsPage() {
  const [activeSelect, setActiveSelect] = useState(1)
  const [section, setSection] = useState<number | null>(null)
  const [floor, setFloor] = useState<number | null>(null)
  const [room, setRoom] = useState<number | null>(null)
  const [square, setSquare] = useState({min: 0, max: 100})
  const [price, setPrice] = useState({min: 0, max: 10000})

  const filtredApartments = mockApartmentData.filter(
    (apartment) =>
      apartment.section === section &&
      apartment.floor === floor &&
      apartment.rooms === room &&
      apartment.square >= square.min &&
      apartment.square <= square.max &&
      apartment.price >= price.min * 1000 &&
      apartment.price <= price.max * 1000
  )

  return (
    <div className={themeStyles.container}>
      <MainTitle>Квартиры</MainTitle>
      <SelectSection
        activeSelect={activeSelect}
        changeSelect={setActiveSelect}
        dataSection={dataSection}
        dataFloor={dataFloor}
        section={section}
        changeSection={setSection}
        floor={floor}
        changeFloor={setFloor}
        room={room}
        changeRoom={setRoom}
        square={square}
        changeSquare={setSquare}
        price={price}
        changePrice={setPrice}
      />
      <SelectContent
        activeSelect={activeSelect}
        apartments={filtredApartments}
      />
      <Record />
    </div>
  )
}

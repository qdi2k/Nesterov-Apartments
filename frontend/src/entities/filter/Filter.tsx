'use client'

import {InputRange, InputSelect, Text} from '@/shared/ui'
import styles from './Filter.module.css'
import {SelectRoom, ToggleSwitch} from './ui'
import {useEffect, useMemo, useState} from 'react'

type RoomData = {
  id: number
  title: string
}

const MOCK_PROJECT_SORT = [
  {id: 1, title: 'Shagal'},
  {id: 2, title: 'Mariinn'},
  {id: 3, title: 'Rauta'},
  {id: 4, title: 'Voxhall'},
]

const MOCK_DATE_SORT = [
  {id: 1, title: 'Сдан'},
  {id: 2, title: 'I квартал 2025'},
  {id: 3, title: 'II квартал 2025'},
  {id: 4, title: 'III квартал 2025'},
  {id: 5, title: 'IV квартал 2025'},
  {id: 6, title: 'I квартал 2026'},
  {id: 7, title: 'II квартал 2026'},
  {id: 8, title: 'III квартал 2026'},
  {id: 9, title: 'IV квартал 2026'},
]

const MOCK_SORT = [
  {id: 1, title: 'Сначала дешевле'},
  {id: 2, title: 'Сначала дороже'},
  {id: 3, title: 'Сначала меньше площадь'},
  {id: 4, title: 'Сначала больше площадь'},
]

const MOCK_ROOMS = [
  {id: 1, title: 0},
  {id: 2, title: 1},
  {id: 3, title: 2},
  {id: 4, title: 3},
  {id: 5, title: 4},
  {id: 6, title: 5},
]

export function Filter({
  apartments,
  apartmentsData,
  setApartmentsData,
  setIsLoading,
}) {
  const [priceValue, setPriceValue] = useState({min: 10000000, max: 100000000})
  const [squareValue, setSquareValue] = useState({min: 20, max: 200})
  const [floorValue, setFloorValue] = useState({min: 2, max: 30})

  const [selectedRooms, setSelectedRooms] = useState<RoomData[]>([])
  const [sortRooms, setSortRooms] = useState([])

  const [filterTimeout, setFilterTimeout] = useState(null)

  const filteredApartments = useMemo(() => {
    return apartments.filter((apartment) => {
      const isRoomValid = (
        selectedRooms.length > 0 ? selectedRooms : MOCK_ROOMS
      ).some((room) => room.title === apartment.rooms)

      return (
        isRoomValid &&
        apartment.price >= priceValue.min &&
        apartment.price <= priceValue.max &&
        apartment.square >= squareValue.min &&
        apartment.square <= squareValue.max &&
        apartment.floor >= floorValue.min &&
        apartment.floor <= floorValue.max
      )
    })
  }, [priceValue, squareValue, floorValue, selectedRooms])

  const resetFilters = () => {
    setPriceValue({min: 10000000, max: 100000000})
    setSquareValue({min: 20, max: 200})
    setFloorValue({min: 2, max: 30})
    setIsLoading(true)
  }

  useEffect(() => {
    const fetchApartments = async () => {
      const fetchedApartments = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredApartments)
        }, 1200)
      })
      setApartmentsData(fetchedApartments)
      setIsLoading(false)
    }
    fetchApartments()
  }, [])

  useEffect(() => {
    if (filterTimeout) {
      clearTimeout(filterTimeout)
    }

    const timeout = setTimeout(() => {
      setIsLoading(true)
      setTimeout(() => {
        setApartmentsData(filteredApartments)
        setIsLoading(false)
      }, 1000)
    }, 1200)

    setFilterTimeout(timeout)

    return () => clearTimeout(timeout)
  }, [priceValue, squareValue, floorValue, selectedRooms])

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <SelectRoom
          rooms={MOCK_ROOMS}
          selectedItems={selectedRooms}
          setSelectedItems={setSelectedRooms}
        />
        <div className={styles.test2}>
          <Text color='blueLight'>Проект</Text>
          <InputSelect
            sortItems={MOCK_PROJECT_SORT}
            placeHolder='Выберите проект'
            isCheck
          />
        </div>
        <div className={styles.test2}>
          <Text color='blueLight'>Срок сдачи</Text>
          <InputSelect
            sortItems={MOCK_DATE_SORT}
            placeHolder='Выберите срок сдачи'
            isCheck
          />
        </div>
      </div>
      <div className={styles.test}>
        <div>
          <Text color='blueLight'>Стоимость</Text>
          <InputRange
            className={styles.range}
            value={priceValue}
            changeValue={setPriceValue}
            min={0}
            max={100000000}
            step={1000000}
            isMultiRange
          />
        </div>
        <div>
          <Text color='blueLight'>Площадь</Text>
          <InputRange
            className={styles.range}
            value={squareValue}
            changeValue={setSquareValue}
            min={0}
            max={200}
            step={1}
            isMultiRange
          />
        </div>
        <div>
          <Text color='blueLight'>Этаж</Text>
          <InputRange
            className={styles.range}
            value={floorValue}
            changeValue={setFloorValue}
            min={0}
            max={30}
            step={1}
            isMultiRange
          />
        </div>
      </div>
      <div className={styles.sortContainer}>
        <Text color='blueLight' className={styles.sortTitle}>
          Сортировать
        </Text>
        <div className={styles.test5}>
          <div className={styles.test4}>
            <div className={styles.test3}>
              <InputSelect
                sortItems={MOCK_SORT}
                sortActive={sortRooms}
                setSortActive={setSortRooms}
              />
            </div>
            <div className={styles.toogles}>
              <div className={styles.toogle}>
                <ToggleSwitch />
                <Text color='grey' className={styles.resetButton}>
                  Не показывать забронированные
                </Text>
              </div>
              <div className={styles.toogle}>
                <ToggleSwitch />
                <Text color='grey' className={styles.resetButton}>
                  Группировать по объектам
                </Text>
              </div>
            </div>
          </div>
          <Text
            weight='medium'
            className={styles.resetButton}
            onClick={() => resetFilters()}
          >
            Сбросить фильтры
          </Text>
        </div>
      </div>
    </div>
  )
}

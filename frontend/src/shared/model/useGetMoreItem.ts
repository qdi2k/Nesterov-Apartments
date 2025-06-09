'use client'

import {useEffect, useState} from 'react'
import { IDataItemProps } from './types'

export default function useGetMoreItem(data: IDataItemProps[], size: number) {
  const [dataToShow, setDataToShow] = useState<IDataItemProps[]>([])
  const [currentGroup, setCurrentGroup] = useState(0);

  const getDelay = (index: number) => {
    const inGroupIndex = index % size
    return inGroupIndex * 0.1
  }

  const handleShowMoreItems = () => {
    const start = currentGroup * size
    const end = start + size
    const newItems = data.slice(start, end)
    setDataToShow(prev => [...prev, ...newItems])
    setCurrentGroup(prev => prev + 1)
  }

  useEffect(() => {
    setDataToShow(data.slice(0, size))
    setCurrentGroup(1)
  }, [data, size])

  return {
    dataToShow,
    handleShowMoreItems,
    getDelay,
  }
}

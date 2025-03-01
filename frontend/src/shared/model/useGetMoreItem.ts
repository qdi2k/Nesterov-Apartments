'use client'

import {useEffect, useState} from 'react'

export default function useGetMoreItem(mockData) {
  const [postsToShow, setPostsToShow] = useState([])
  const [documentsCount, setDocumentsCount] = useState(5)

  const loopWithSlice = (start: number, end: number) => {
    const slicedPosts = mockData.slice(start, end)
    const arrayForHoldingPosts = [...postsToShow, ...slicedPosts]
    setPostsToShow(arrayForHoldingPosts)
  }

  const getDelay = (id: number) => {
    const round = id / 5
    if (Number.isInteger(round)) {
      return 0.5
    }
    const result = Number((round % 1).toFixed(1)) / 2
    return result
  }

  const handleShowMoreDocuments = () => {
    const remainingDocuments =
      mockData.length - postsToShow.length >= 5
        ? 5
        : mockData.length - postsToShow.length
    loopWithSlice(documentsCount, documentsCount + remainingDocuments)
    setDocumentsCount((prev) => prev + remainingDocuments)
  }

  useEffect(() => {
    loopWithSlice(0, 5)
  }, [])

  return {
    postsToShow,
    handleShowMoreDocuments,
    getDelay,
  }
}

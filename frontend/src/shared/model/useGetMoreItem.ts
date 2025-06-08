'use client'

import {useEffect, useState} from 'react'

export default function useGetMoreItem(mockData, size) {
  const [postsToShow, setPostsToShow] = useState([])
  const [documentsCount, setDocumentsCount] = useState(size)

  const loopWithSlice = (start: number, end: number) => {
    const slicedPosts = mockData.slice(start, end)
    const arrayForHoldingPosts = [...postsToShow, ...slicedPosts]
    setPostsToShow(arrayForHoldingPosts)
  }

  const getDelay = (id: number) => {
    const round = id / (size === 5 ? 5 : 9)
    if (Number.isInteger(round)) {
      return 0.5
    }
    const result = Number((round % 1).toFixed(1)) / 2
    return result
  }

  const handleShowMoreDocuments = () => {
    const remainingDocuments =
      mockData.length - postsToShow.length >= size
        ? size
        : mockData.length - postsToShow.length
    loopWithSlice(documentsCount, documentsCount + remainingDocuments)
    setDocumentsCount((prev) => prev + remainingDocuments)
  }

  useEffect(() => {
    setPostsToShow([])
    setDocumentsCount(size)
    const initialPosts = mockData.slice(0, size)
    setPostsToShow(initialPosts)
  }, [mockData, size])

  return {
    postsToShow,
    handleShowMoreDocuments,
    getDelay,
  }
}

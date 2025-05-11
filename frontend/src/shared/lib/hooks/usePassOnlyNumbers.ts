import { useCallback } from "react"

export function usePassOnlyNumbers() {
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    const reg = /^[a-zA-Zа-яА-Я]*$/

    if (key.length === 1 && reg.test(key) && !event.metaKey && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault()
    }
  }, [])

  return handleKeyDown
}
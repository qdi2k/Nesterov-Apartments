export function usePluralize() {
  const pluralize = (countProp: number | string, words: string[], isWithoutCount?: boolean) => {
    const cases = [2, 0, 1, 1, 1, 2]
    const count = Number(countProp)
    const getCurrentWord = () => {
      if (count % 100 > 4 && count % 100 < 20) {
        return words[2]
      }
      return words[cases[Math.min(count % 10, 5)]]
    }
    return `${!isWithoutCount ? `${count} ` : ''}${getCurrentWord()}`
  }

  return {
    pluralize
  }
}

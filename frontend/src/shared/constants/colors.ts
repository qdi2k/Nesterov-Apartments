declare const AvailableColors: ['white', 'whiteLight', 'grey', 'greyLight', 'orange', 'brown', 'brownDark', 'black']
export type Colors = typeof AvailableColors[number] | undefined

export const getColor = (type: Colors) => {
  switch (type) {
    case 'white':
      return 'rgba(255, 255, 255, 1)'
    case 'whiteLight':
      return 'rgba(255, 249, 239, 1)'
    case 'grey':
      return 'rgba(162, 162, 162, 1)'
    case 'greyLight':
      return 'rgba(189, 181, 176, 1)'
    case 'orange':
      return 'rgba(255, 153, 0, 1)'
    case 'brown': 
      return 'rgba(68, 29, 6, 1)'
    case 'brownDark': 
      return 'rgba(43, 16, 1, 1)'
    default:
      return 'rgba(0, 0, 0, 1)'
  }
}
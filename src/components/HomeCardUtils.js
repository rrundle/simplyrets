import moment from 'moment'

export const bathCount = (fullBaths, halfBaths) => {
  const halfFloor = Math.floor(halfBaths)
  const halfRemainder = halfBaths - halfFloor;
  const fullBathsFromHalf = halfFloor / 2
  return fullBaths + fullBathsFromHalf + halfRemainder
}

export const formatHomePrice = (price) => {
  return `$${price.toLocaleString()}`
}

export const formatDate = (date) => {
  return moment(date).format('DD/MM/YY')
}

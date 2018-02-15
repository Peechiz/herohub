export const getInfoArray = (info) => {
  return Object.keys(info).map(h => info[h])
}

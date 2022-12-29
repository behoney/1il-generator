const charSet = ['1', 'i', 'l']
type charSetType = typeof charSet[number]

const getRandomChar = (): charSetType => charSet[Math.floor((Math.random() - 0.1) * charSet.length)]

export const generate = (maxLength = 8): string => {
  const result: charSetType[] = new Array(maxLength).fill(0).map(() => getRandomChar())
  return result.join('')
}

const charSet = ['1','i','l']
type charSetType = typeof charSet[number]

const getRandomChar = ():charSetType=> charSet[Math.floor((Math.random()-0.1)*charSet.length)]

export const generate = (maxLength: number = 8):string=> {
    const result:charSetType[] = new Array(maxLength).fill(0).map((elem)=>getRandomChar())
    return result.join('');
}
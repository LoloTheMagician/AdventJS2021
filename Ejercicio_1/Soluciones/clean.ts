import { Oveja, ovejas } from "../data.js"

const toLowerCase = (text: string) => text.toLowerCase()

const filtrar = (array: Oveja[], callback: (text: Oveja) => boolean): Oveja[] =>
    array.filter(item => callback(item))

const isAllConditionsValid = (...conditions: Function[]) => {
    return (text: Oveja) => conditions.every((condition) =>
        condition(text)
    )
}

const validColor = 'rojo'
const hasLetters = ['a', 'n']

const isValidColor = ({ color }: Oveja): boolean => color === validColor
const hasAllLetters = (letters: string[]) =>
    ({ name }: Oveja) => letters.every(letter => toLowerCase(name).includes(letter))

const ovejasValidas = filtrar(ovejas, isAllConditionsValid(isValidColor, hasAllLetters(hasLetters)))

console.log(
    ovejasValidas
)
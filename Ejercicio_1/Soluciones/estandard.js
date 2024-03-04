import { ovejas } from './../../dir/data.js'

const contarOvejas = (ovejas) => {

    const validColor = 'rojo'
    const letters = ['a', 'n']
    const ovejasValidas = []

    for (const oveja of ovejas) {
        const { color } = oveja
        if (color !== validColor) continue
        const { name } = oveja
        const nameLowerCase = name.toLowerCase()
        const hasAllLetters = letters.every(letter => nameLowerCase.includes(letter))
        if (hasAllLetters) ovejasValidas.push(oveja)
    }

    return ovejasValidas

}

console.log(contarOvejas(ovejas))
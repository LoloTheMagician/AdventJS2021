import { ovejas } from './../../dir/data.js'

const contarOvejas = (ovejas) => {
    const validColor = 'rojo'
    const lettersContain = ['a', 'n']
    return ovejas.filter(({ name, color }) =>
        color === validColor
        &&
        lettersContain.every(letter => name.toLowerCase().includes(letter))
    )
}

console.log(contarOvejas(ovejas))
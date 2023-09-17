const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'verde' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

const filtrarColorOvejas = (ovejas, ...omitirColores) => {
    return ovejas
        .filter(({ color }) => !omitirColores.includes(color))

}

const filtrarNombreOveja = (ovejas, ...letras) => {
    return ovejas
        .filter(({ name }) => ovejaIncluyeLetras(name, letras))
}

const ovejaIncluyeLetras = (oveja, letras) =>
    letras.every(letra => nombreMinuscula(oveja).includes(letra))

const nombreMinuscula = (nombre) => nombre.toLowerCase()

console.log(
    filtrarNombreOveja(filtrarColorOvejas(ovejas, 'azul', 'verde'), 'a', 'n')
)
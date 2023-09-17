const carta = 'bici coche balón _playstation bici coche peluche'

const obtenerRegalos = (cartaRegalos) => {

    const cartaSinEspacios = cartaRegalos.trim()
    return cartaSinEspacios
        .split(' ')
        .filter(regalo => !regalo.startsWith('_'))

}

const contarRegalos = (regalos) => {
    const regalosContados = {}

    for (const regalo of regalos)
        regalosContados[regalo]++ || (regalosContados[regalo] = 1)

    return regalosContados
}

console.log(
    contarRegalos(obtenerRegalos(carta))
)
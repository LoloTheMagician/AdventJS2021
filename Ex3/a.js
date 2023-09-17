
const crearArbol = (altura) => {

    let contador = 0
    let hojas = -1
    let arbol = ''

    while (contador !== altura) {
        hojas += 2
        const rama = crearRama(altura, hojas)
        arbol += rama + '*'.repeat(hojas) + rama + '\n'

        contador++
    }

    arbol += crearTronco(altura) + '\n' + crearTronco(altura)

    return arbol
}

const crearRama = (altura, cantidadHojas) => '_'.repeat(
    ((altura * 2) - 1 - cantidadHojas) / 2
)

const crearTronco = (altura) => crearRama(altura, 1) + '#' + crearRama(altura, 1)

console.log(
    crearArbol(5)
)
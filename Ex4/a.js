
const obtenerNotas = (notas, resultado) => {

    const notasValidas = notas.filter(nota => nota <= resultado)

    if (notasValidas.length === 0) return null

    for (const indice in notasValidas) {
        const nota = notasValidas[indice]
        const resta = resultado - nota

        if (parseInt(indice) === notasValidas.lastIndexOf(resta)) continue

        if (notasValidas.includes(resta)) return [nota, resta]
    }

    return null

}

console.log(
    obtenerNotas([3, 5, 7, 2], 10), // [3, 7]
    obtenerNotas([-3, -2, 7, -5], 10), // null
    obtenerNotas([2, 2, 3, 1], 4), // [2, 2]
    obtenerNotas([6, 7, 1, 2], 8), // [6, 2]
    obtenerNotas([0, 2, 2, 3, -1, 1, 5], 6), // [1, 5]
)
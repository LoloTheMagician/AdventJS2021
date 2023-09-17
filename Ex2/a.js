function listGifts(letter) {

    let obj = {}

    letter.trim()
    .split(' ')
    .filter(pal => !pal.includes('_'))
    .map(pal => !obj[pal] ? obj[pal] = 1 : obj[pal]++)

    return obj
    
}

const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)
console.log(regalos)
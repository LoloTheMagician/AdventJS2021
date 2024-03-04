
const isValid = (letter) => {
    const invalidSymbols = [
        '[',
        ']',
        '{',
        '}'
    ]
    const hasInvalidSymbols =
        invalidSymbols.find(symbol => letter.includes(symbol))
    if (hasInvalidSymbols) return false

    const pars = ['(', ')']

    for (const word of letter.split(' ')) {
        const wordHasSomePar = pars.find(par => word.includes(par))
        if (!wordHasSomePar) continue
        const wordHasEveryPar = pars.every(par => word.includes(par))
        if (!wordHasEveryPar) return false
        const [firstChar, lastChar] = [word.at(0), word.at(-1)]
        if (firstChar !== '(') return false
        if (lastChar !== ')') return false
        const middle = word.slice(1, -1)
        if (middle === '' || pars.find(par => middle.includes(par))) return false
    }

    return true
}
import carta from "../data.js";

const listGifts = (letter) => {
    const unvalidGift = '_'
    const validSpaceLetter = letter.trim()
    const letterWordSeparation = validSpaceLetter.split(' ')
    const giftsAccount = {}
    for (const gift of letterWordSeparation) {
        const firstLetter = gift.at(0)
        if (firstLetter === unvalidGift) continue
        if (!giftsAccount[gift]) giftsAccount[gift] = 0
        giftsAccount[gift]++
    }
    return giftsAccount
}

console.log(listGifts(carta))
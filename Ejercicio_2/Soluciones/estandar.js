import carta from "../data.js"

const listGifts = (letter) => {
    const unvalidGift = '_'
    const validSpaceLetter = letter.trim()
    const letterWordSeparation = validSpaceLetter.split(' ')
    const giftsAccount = {}

    letterWordSeparation.forEach(gift => {
        const firstLetter = gift.at(0)
        if (firstLetter !== unvalidGift) {
            const giftCounted = giftsAccount[gift]
            if (!giftCounted) giftsAccount[gift] = 1
            else giftsAccount[gift]++
        }
    });

    return giftsAccount
}

console.log(listGifts(carta))

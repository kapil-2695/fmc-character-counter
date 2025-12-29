export function getTextStatistics(text, excludeSpaces) {
    const spaceMatches = text.match(/ /g)
    const spaces = excludeSpaces && spaceMatches ? Array.from(spaceMatches).length : 0
    const totalCharacters = (text.length - spaces).toString().padStart(2, "0")

    const wordMatches = text.match(/\b\w+\b/g)
    const wordCount = wordMatches ? Array.from(wordMatches).length.toString().padStart(2, "0") : "00"

    const sentenceMatches = text.match(/\b[^.!?]+[.!?]+/g)
    const sentenceCount = sentenceMatches ? Array.from(sentenceMatches).length.toString().padStart(2, "0") : "00"

    return { totalCharacters, wordCount, sentenceCount }
}


export function getSortedLetterDensity(text) {
    const letterMatches = text.match(/[a-zA-Z]{1}/g)
    const letterArray = letterMatches ? Array.from(letterMatches) : []
    const letterDensityObj = {}

    for (let letter of letterArray) {
        if (letterDensityObj.hasOwnProperty(letter.toUpperCase()))
            letterDensityObj[letter.toUpperCase()] += 1
        else
            letterDensityObj[letter.toUpperCase()] = 1
    }

    return {
        density: Object.entries(letterDensityObj).sort((first, second) => second[1] - first[1]),
        letterCount: letterArray.length
    }
}
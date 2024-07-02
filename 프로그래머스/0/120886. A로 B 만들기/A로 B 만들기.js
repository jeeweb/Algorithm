function solution(before, after) {
    const afterLetters = after.split("");
    before.split("").map(letter => {
        if (afterLetters.includes(letter)) {
            afterLetters.splice(afterLetters.indexOf(letter), 1)
        }
    })
    return afterLetters.length > 0 ? 0 : 1
}
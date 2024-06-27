function solution(array, n) {
    const obj = {}
    array.forEach((num) => {
        obj[num] = Math.abs(num - n)
    });
    const sorted = Object.values(obj).sort((a, b) => a - b)
    if (sorted[0] === sorted[1]) {
        return Math.min(...Object.keys(obj).filter(key => obj[key] === sorted[0] || obj[key] === sorted[1]))
    }
    return +Object.keys(obj).find(key => obj[key] === Math.min(...sorted))
}
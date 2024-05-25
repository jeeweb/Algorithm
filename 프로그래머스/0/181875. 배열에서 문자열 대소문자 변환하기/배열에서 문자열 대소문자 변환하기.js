function solution(strArr) {
    return [...strArr].map((elem, i) => i % 2 === 0 ? elem.toLowerCase() : elem.toUpperCase())
}
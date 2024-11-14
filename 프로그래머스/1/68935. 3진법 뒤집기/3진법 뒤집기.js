function solution(n) {
    const converted = n.toString(3).split("").reverse().join("");
    return parseInt(converted, 3)
}
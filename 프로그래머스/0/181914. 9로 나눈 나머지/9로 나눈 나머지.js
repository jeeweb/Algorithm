function solution(number) {
    const sum = number.split("").reduce((acc, cur) => acc + +cur, 0)
    return sum % 9
}
function solution(a, b) {
    let num1 = Number(`${a}${b}`)
    let num2 = Number(`${b}${a}`)
    let answer = Math.max(num1, num2)
    return answer;
}
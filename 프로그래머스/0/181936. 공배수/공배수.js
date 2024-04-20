function solution(number, n, m) {
    let answer = 0;
    number % n === 0 && number % m === 0 ? answer = 1 : answer = 0
    return answer;
}
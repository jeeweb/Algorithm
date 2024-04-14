function solution(a, b) {
    var answer = 0;
    let num = Number(`${a}${b}`)
    let calcNum = 2 * a * b;
    
    num - calcNum < 0 ? answer = calcNum : answer = num 
    
    return answer;
}
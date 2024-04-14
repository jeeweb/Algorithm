function solution(a, b) {
    let answer = 0;
    let num1 = parseInt(String(a) + String(b))
    let num2 = parseInt(String(b) + String(a))
    
    num1 - num2 > 0 ? answer = num1 : answer = num2
    
    return answer;
}
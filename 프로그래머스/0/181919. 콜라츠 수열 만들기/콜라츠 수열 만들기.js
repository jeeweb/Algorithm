function solution(n) {
    const answer = [n];
    let temp = n;
    
    while (temp !== 1) {
        temp % 2 === 0
        ? temp = temp / 2 
        : temp = 3 * temp + 1 
        
        answer.push(temp)
    }
    
    return answer;
}
function solution(ineq, eq, n, m) {
    let answer = false;
    
    if (eq === "=") {
        if (ineq === ">") {
            answer = n >= m
        } else if (ineq === "<"){
            answer = n <= m
        }
    } else if (eq === "!") {
        if (ineq === ">") {
            answer = n > m
        } else if (ineq === "<"){
            answer = n < m
        }
    }
    return answer ? 1 : 0;
}
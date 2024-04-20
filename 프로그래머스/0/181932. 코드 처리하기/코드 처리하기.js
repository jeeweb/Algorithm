function solution(code) {
    let answer = '';
    let mode = 0;
    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (code[i] === "1") {
                mode = 1
            } 
            if (i % 2 === 0 && code[i] !== "1") {
                answer += code[i]    
            }
        } else {
            if (code[i] === "1") {
                mode = 0
            }
            if (i % 2 > 0 && code[i] !== "1") {
                answer += code[i]    
            }
        }
    }
    return answer || "EMPTY";
}
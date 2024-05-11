function solution(s){
    let temp = 0;
    const brackets = s.split("")
    if (brackets[0] === ")") return false
    for (let i = 0; i < brackets.length; i++) {
        brackets[i] === "(" ? temp++ : temp--;
        if (temp < 0) return false
    }
    return temp === 0 ? true : false;
}
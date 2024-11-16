function solution(s) {
    let count = 0;
    let zeroAmount = 0;
    while(s > 1) {
        let converted = s.split("").map(el => {
            if (el === "0") {
                zeroAmount++
                return ""
            } else {
                return el
            }
        }).join("")
        
        s = converted.length.toString(2)
        count++;
    }
    return [count, zeroAmount]
}
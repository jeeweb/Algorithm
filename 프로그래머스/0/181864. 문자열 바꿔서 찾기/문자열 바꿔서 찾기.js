function solution(myString, pat) {
    const strArr = myString.split("")
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "A") {
            strArr[i] = "B"
        } else {
            strArr[i] = "A"
        }
    }
    
    return strArr.join("").includes(pat) ? 1 : 0
}
function solution(myString) {
    let codeL = "l".charCodeAt();
    return myString.split("").map((char) => char.charCodeAt() < codeL ? char = "l" : char).join("")
}
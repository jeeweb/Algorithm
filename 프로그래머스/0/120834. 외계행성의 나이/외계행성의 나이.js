function solution(age) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    return age.toString().split("").map(num => alphabet[+num]).join("")
}
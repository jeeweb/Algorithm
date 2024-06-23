function solution(s) {
    const arr = s.split("")
    const answer = arr.filter(str => arr.indexOf(str) === arr.lastIndexOf(str))
    return answer.sort().join("")
}
function solution(s1, s2) {
    let count = 0;
    s1.forEach(str => s2.indexOf(str) >= 0 ? count++ : "")
    return count;
}
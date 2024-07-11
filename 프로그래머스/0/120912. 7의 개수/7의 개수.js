function solution(array) {
    let count = 0;
    array.join("").split("").forEach(num => num === "7" ? count++ : "")
    return count
}
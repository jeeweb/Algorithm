function solution(s) {
    const result = [];
    const arr = s.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] === "Z" ? result.pop() : result.push(+arr[i]);
    }
    return result.length > 0 ? result.reduce((acc, cur) => acc += cur) : 0
}
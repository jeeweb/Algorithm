function solution(n) {
    let numArr = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                numArr.push(i);
            }
        }
    }
    return [...new Set(numArr)].length;
}
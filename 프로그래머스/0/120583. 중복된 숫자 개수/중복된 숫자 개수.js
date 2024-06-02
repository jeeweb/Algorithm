function solution(array, n) {
    let count = 0;
    array.forEach(number => number === n ? count++ : number)
    return count;
}
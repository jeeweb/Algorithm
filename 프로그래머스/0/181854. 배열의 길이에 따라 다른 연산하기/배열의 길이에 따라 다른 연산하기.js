function solution(arr, n) {
    let result;
    if (arr.length % 2 === 0) {
        result = arr.map((elem, idx) => idx % 2 > 0 ? elem + n : elem)
    } else {
        result = arr.map((elem, idx) => idx % 2 === 0 ? elem + n : elem)
    }
    return result;
}
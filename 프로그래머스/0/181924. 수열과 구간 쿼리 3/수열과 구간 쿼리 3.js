function solution(arr, queries) {
    for (query of queries) {
        let temp;
        temp = arr[query[0]];
        arr[query[0]] = arr[query[1]];
        arr[query[1]] = temp;
    }
    return arr;
}
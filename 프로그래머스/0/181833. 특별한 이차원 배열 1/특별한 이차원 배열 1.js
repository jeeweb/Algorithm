function solution(n) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++){
        arr[i] = new Array(n).fill(0);
        arr[i][i] = 1;
    }
    return arr;
}
function solution(A, B) {
    let count = 0;
    let temp;
    while(A !== B) {
        if (count === B.length) return -1;
        temp = A.slice(-1);
        A = temp + A.slice(0, A.length - 1);
        count++;
    }
    return count;
}
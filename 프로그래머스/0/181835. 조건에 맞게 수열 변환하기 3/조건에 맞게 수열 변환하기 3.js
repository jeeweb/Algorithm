function solution(arr, k) {
    return arr.map(elem => k % 2 === 0 ? elem + k : elem * k)
    
}
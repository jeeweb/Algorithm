function solution(arr) {
    let powerOfTwo = 1
    while (powerOfTwo < arr.length) {
        powerOfTwo *= 2    
    }
    const tempArr = new Array(powerOfTwo - arr.length).fill(0);
    return arr.concat(tempArr)
}
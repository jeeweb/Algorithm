function solution(arr) {
    const difference = arr.length - arr[0].length;
    if (difference > 0) {
        for (let i = 0; i < Math.abs(difference); i++){
            arr.map(v => v.push(0))
        }
    }
    if (difference < 0) {
        const zeroArr = new Array(arr[0].length).fill(0)
        for (let i = 0; i < Math.abs(difference); i++){
            arr.push(zeroArr);
        }
    }
    return arr;
}
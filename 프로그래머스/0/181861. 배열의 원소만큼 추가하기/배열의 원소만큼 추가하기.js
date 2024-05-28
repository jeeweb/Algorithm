function solution(arr) {
    let x = [];
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i]; j++) {
            x.push(arr[i]);
        }
    }
    return x;
}
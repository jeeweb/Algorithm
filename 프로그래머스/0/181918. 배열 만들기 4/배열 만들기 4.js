function solution(arr) {
    const stk = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length > 0 && stk[stk.length -1] >= arr[i]) {
          stk.pop()  
        } else {
          stk.push(arr[i]);
          i++;
        }
    }
    return stk;
}
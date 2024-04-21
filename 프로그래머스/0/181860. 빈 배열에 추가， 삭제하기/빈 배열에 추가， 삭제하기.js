function solution(arr, flag) {
    const answer = [];
    flag.map((boolean, idx) => {
        if (boolean) {
            for (let i = 0; i < arr[idx] * 2; i++) {
                answer.push(arr[idx]);
            }    
        } else {
            for (let i = 0; i < arr[idx]; i++) {
                answer.pop();
            } 
        }
    })
    return answer;
}
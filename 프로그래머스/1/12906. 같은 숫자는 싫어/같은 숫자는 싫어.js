function solution(arr) {
    const answer = [];
    if (arr.length > 0) {
        answer.push(arr[0]);
        arr.forEach(num => {
          num !== answer[answer.length - 1] ? answer.push(num) : ""
        })
    }
    return answer;       
}
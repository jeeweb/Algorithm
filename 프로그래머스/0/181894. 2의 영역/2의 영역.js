function solution(arr) {
    let answer = []
    const firstTwo = arr.indexOf(2);
    if (firstTwo < 0) {
        answer.push(-1);
    } else {
        const lastTwo = arr.lastIndexOf(2);
        answer = arr.slice(firstTwo, lastTwo + 1)
    }
    return answer;
}
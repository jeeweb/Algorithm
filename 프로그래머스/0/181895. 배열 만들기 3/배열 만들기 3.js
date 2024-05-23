function solution(arr, intervals) {
    const answer = [];
    intervals.forEach(interval => answer.push(...arr.slice(interval[0], interval[1] + 1)))
    return answer;
}
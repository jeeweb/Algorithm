function solution(score) {
    const result  = [];
    const avgArr = score.map((arr) => (arr[0] + arr[1]) / 2);
    const sorted = [...avgArr].sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        result.push(sorted.indexOf(avgArr[i]) + 1) 
    }
    return result;
}
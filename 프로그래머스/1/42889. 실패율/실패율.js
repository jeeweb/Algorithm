function solution(N, stages) {
    let users = stages.length;
    const count = new Array(N).fill(0)
    const failureRate = [];
    const result = []
    
    stages.forEach(stage => stage <= N ? count[stage-1]++ : stage);
    
    for(let i = 0; i < count.length; i++) {
        if (count[i] !== 0) {
            failureRate.push(count[i] / users);
        } else {
            failureRate.push(0)
        }
        users -= count[i]
    }
    const isMinus = (value) => value < 0; 
    const findMax = (arr) => {
        if (arr.every(isMinus)) return; 
        result.push(arr.indexOf(Math.max(...arr)) + 1);
        arr.splice(arr.indexOf(Math.max(...arr)), 1, -1)
        findMax(arr);
    }
    findMax(failureRate);
    return result;
}
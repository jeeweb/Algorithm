function solution(arr, queries) {
    const answer = [];
    
    queries.forEach(query => {
        let tempArr = arr.slice(query[0], query[1] + 1).filter(num => num > query[2]);
        tempArr.length > 0 ? answer.push(Math.min(...tempArr)) : answer.push(-1) 
    })
    
    return answer;
}
function solution(answers) {
    const answer = [];
    const surrenders = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    const countObj = {};
    
    surrenders.forEach((surrender, idx) => {
        let count = 0;
        for (let i = 0; i < answers.length; i++) {
            answers[i] === surrender[i % surrender.length] ? count++ : ""
        }    
        countObj[idx + 1] = count;
    })
    
    const sorted = Object.entries(countObj).sort((a, b) => b[1] - a[1]);
    const topScore = Math.max(...Object.values(countObj));
    
    sorted.forEach(item => {
        if (topScore === item[1]) {
            answer.push(+item[0]) 
        }
    })
    
    return answer;
}
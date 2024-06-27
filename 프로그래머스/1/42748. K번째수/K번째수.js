function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++){
        let start = commands[i][0] - 1;
        let end = commands[i][1];
        let k = commands[i][2] - 1;
        let part = array.slice(start, end).sort((a, b) => a - b);
        answer.push(part[k]);
    }
    return answer;
}
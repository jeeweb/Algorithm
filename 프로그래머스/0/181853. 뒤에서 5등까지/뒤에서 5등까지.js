function solution(num_list) {
    const answer = [];
    while (answer.length < 5) {
        let minNum = Math.min(...num_list)
        let index = num_list.indexOf(minNum);
        num_list.splice(index, 1)
        answer.push(minNum)
    }
    return answer;
}
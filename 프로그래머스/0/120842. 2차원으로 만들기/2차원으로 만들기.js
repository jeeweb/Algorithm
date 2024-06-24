function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i ) {
        answer.push([...num_list.splice(i, n)]);
    }
    return answer;
}
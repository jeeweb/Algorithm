function solution(num_list) {
    const answer = num_list.reduce((acc, cur) => {
        return acc += cur.toString(2).length - 1
    }, 0)
    
    return answer;
}
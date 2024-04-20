function solution(my_string, queries) {
    let answer = my_string;
    for (let item of queries) {
        answer = answer.slice(0, item[0]) + answer.slice(item[0], item[1] + 1).split("").reverse().join("") + answer.slice(item[1] + 1)
    }
    return answer;
}
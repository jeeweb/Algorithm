function solution(todo_list, finished) {
    const answer = [];
    finished.forEach((isDone, i) => isDone ? "" : answer.push(todo_list[i]))
    return answer;
}
function solution(my_string) {
    const answer = [];
    for (let i = 1; i <= my_string.length; i++) {
        let wordLength = my_string.length - i;
        answer.push(my_string.slice(wordLength));
    }
    return answer.sort();
}
function solution(my_string) {
    const answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++){
        if (my_string[i].charCodeAt() < 91){
            answer[my_string[i].charCodeAt() - 65]++;    
        } else {
            answer[my_string[i].charCodeAt() - 71]++;    
        }
    }
    return answer;
    
}
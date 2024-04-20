function solution(a, d, included) {
    var answer = 0;
    included.map((item, index) => {
        return item ? answer += a + d * index : null
    })
    return answer;
}
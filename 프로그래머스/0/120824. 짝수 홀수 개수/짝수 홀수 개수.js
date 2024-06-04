function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach(num => {
        if (num % 2 === 0) even++
        else odd++
    })
    return [even, odd];
}
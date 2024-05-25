function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    num_list.forEach((item, i) => {
        if (i % 2 === 0) evenSum += item;
        if (i % 2 > 0) oddSum += item;
    })
    return evenSum > oddSum ? evenSum : oddSum;
}
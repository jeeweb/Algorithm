function solution(num_list) {
    const multipleAll = num_list.reduce((acc, cur) => acc *= cur)
    const sumAll = num_list.reduce((acc, cur) => acc += cur)
    return multipleAll < sumAll**2 ? 1 : 0
    
}
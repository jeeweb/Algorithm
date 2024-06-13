function solution(my_string) {
    return my_string.split("").reduce((acc, cur) => /[0-9]/.test(cur) ? acc += +cur : acc += 0, 0)
}
function solution(my_string) {
    return my_string.split(/[^0-9]/g).map(num => +num).reduce((acc, cur) => acc += cur, 0)
}
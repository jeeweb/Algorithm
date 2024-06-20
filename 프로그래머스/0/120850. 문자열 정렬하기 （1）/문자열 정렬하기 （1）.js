function solution(my_string) {
    let numArr = [];
    for (let str of my_string) {
        if (!isNaN(str)) numArr.push(+str)
    }
    return numArr.sort((a, b) => a - b)
}
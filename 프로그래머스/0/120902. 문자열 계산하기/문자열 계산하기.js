function solution(my_string) {
    const arr = my_string.split(" ");
    let result = +arr[0]
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] === "+") {
            result += +arr[i + 1]
        } else if (arr[i] === "-") {
            result -= +arr[i + 1]
        }
    }
    return result;
}
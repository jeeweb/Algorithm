function solution(my_string, alp) {
    return my_string.split("").map((item) => item === alp ? item.toUpperCase() : item).join("")
}
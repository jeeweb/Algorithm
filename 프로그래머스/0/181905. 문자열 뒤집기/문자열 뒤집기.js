function solution(my_string, s, e) {
    let reverseWord = my_string.slice(s, e + 1).split("").reverse().join("")
    return my_string.slice(0, s) + reverseWord + my_string.slice(e + 1);
}
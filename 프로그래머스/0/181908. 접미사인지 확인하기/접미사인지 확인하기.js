function solution(my_string, is_suffix) {
    return is_suffix === my_string.slice(is_suffix.length * (-1)) ? 1: 0;
}
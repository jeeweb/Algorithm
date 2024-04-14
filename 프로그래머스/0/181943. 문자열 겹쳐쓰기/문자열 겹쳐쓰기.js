function solution(my_string, overwrite_string, s) {
    let result = "";
    my_string.length <= overwrite_string.length + s 
    ? result = my_string.slice(0, s) + overwrite_string
    : result = my_string.slice(0, s) + overwrite_string + my_string.slice(overwrite_string.length + s)
    return result;
}
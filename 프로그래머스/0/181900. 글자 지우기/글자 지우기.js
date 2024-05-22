function solution(my_string, indices) {
    const strArr = my_string.split("");
    const sortIndices = indices.sort((a, b) => b - a);
    for (let i = 0; i < indices.length; i++) {
        strArr.splice(sortIndices[i], 1);
    }
    return strArr.join("")
}
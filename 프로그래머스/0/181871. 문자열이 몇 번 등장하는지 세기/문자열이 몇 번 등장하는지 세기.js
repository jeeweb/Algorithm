function solution(myString, pat) {
    const patLength = pat.length;
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString.slice(i, patLength + i) === pat) count++
    }
    return count;
}
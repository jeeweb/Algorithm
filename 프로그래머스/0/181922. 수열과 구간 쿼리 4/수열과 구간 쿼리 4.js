function solution(arr, queries) {
    queries.forEach(query => {
        for (let i = query[0]; i <= query[1]; i++) {
            i % query[2] === 0 ? arr[i]++ : ""
        }
    })
    return arr;
}
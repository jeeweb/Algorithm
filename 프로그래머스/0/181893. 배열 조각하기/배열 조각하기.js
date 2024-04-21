function solution(arr, query) {
    let result = arr;
    query.map((item, idx) => {
       if (idx % 2 === 0) {
            result = result.slice(0, item + 1)
        } else {
            result = result.slice(item)    
        }
    });
    
    return result;
}
function solution(arr, k) {
    let result;
    const filtered = [...new Set(arr)]
    
    if (filtered.length > k) {
        result = filtered.slice(0, k)  
    } else {
        const filled = new Array(k - filtered.length).fill(-1);
        result = filtered.concat(filled)
    }
    
    return result;
}
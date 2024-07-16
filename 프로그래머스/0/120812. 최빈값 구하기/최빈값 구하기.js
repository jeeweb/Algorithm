function solution(array) {
    const countObj = new Object();
    array.forEach(num => {
        if (num in countObj) {
            countObj[num] += 1;
        } else {
            countObj[num] = 1
        }
    })
    const sorted = Object.keys(countObj).sort((a, b) => countObj[b] - countObj[a])
    return countObj[sorted[0]] === countObj[sorted[1]] ? -1 : +sorted[0]
}
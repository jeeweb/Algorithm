function solution(clothes) {
    const dataObj = {}
    let result = 1;
    for (let arr of clothes) {
        const [item, type] = arr;
        dataObj[type] = dataObj[type] ? dataObj[type] + 1 : 1;
    }
    const values = Object.values(dataObj)
    if (values.length === 1) return values[0];
    return values.reduce((acc, cur) => acc *= cur + 1, 1) - 1;
}
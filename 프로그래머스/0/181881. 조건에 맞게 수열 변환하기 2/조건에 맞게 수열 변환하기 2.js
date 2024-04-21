function solution(arr) {
    let count = 0;
    let prevArr = arr;
    let convertedArr = []
    
    const convert = (array) => {
        convertedArr = array.map(number => {
            if (number >= 50 && number % 2 === 0) {
                return number / 2;
            }   
            if (number < 50 && number & 2 !== 0) {
                return number * 2 + 1;
            }
            return number
        })
    }
    
    convert(prevArr)
    
    while (JSON.stringify(prevArr) !== JSON.stringify(convertedArr)) {
        prevArr = convertedArr;
        convert(prevArr)
        count++;
    }
    return count;
}
function solution(a, b, c) {
    const sumAll = a + b + c;
    const twoSquareSum = a ** 2 + b ** 2 + c ** 2;
    const threeSquareSum = a ** 3 + b ** 3 + c ** 3;
    if (a !== b && b !== c && a !== c) {
        return answer = sumAll;
    } else if (a === b && b === c && a === c) {
        return answer = sumAll * twoSquareSum * threeSquareSum;
    } else {
        return answer = sumAll * twoSquareSum;
    }
}
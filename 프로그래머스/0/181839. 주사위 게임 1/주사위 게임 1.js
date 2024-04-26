function solution(a, b) {
    const isAEven = a % 2 === 0;
    const isBEven = b % 2 === 0;
    console.log(isAEven, isBEven)
    
    return isAEven || isBEven ? isAEven && isBEven ? Math.abs(a - b) : 2 * (a + b) : a ** 2 + b ** 2
}
function solution(order) {
    return order.toString().split("").filter(num => +num !== 0 && +num % 3 === 0).length;
}
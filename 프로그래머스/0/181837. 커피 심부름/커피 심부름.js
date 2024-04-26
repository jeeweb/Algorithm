function solution(order) {
    let answer = 0;
    order.forEach((menu) => {
        if(menu.includes("americano") || menu.includes("anything")) {
            answer += 4500
        }
        if(menu.includes("cafelatte")) {
            answer += 5000
        }
    })
    return answer;
}
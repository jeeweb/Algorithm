function solution(n) {
    const factors = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push([i, n / i])
        }
    }
    return factors.length;
}
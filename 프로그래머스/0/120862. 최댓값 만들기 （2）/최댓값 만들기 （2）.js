function solution(numbers) {
    const sorted = numbers.sort((a, b) => a - b)
    if (sorted[0] < 0 && sorted[1] && sorted[0] * sorted[1] > sorted[sorted.length - 1] * sorted[sorted.length - 2]) {
        return sorted[0] * sorted[1]
    }
    return sorted[sorted.length - 1] * sorted[sorted.length - 2]
}
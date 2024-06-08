function solution(array) {
    const sorted = [...array].sort((a, b) => b - a)
    return [sorted[0], array.indexOf(sorted[0])];
}
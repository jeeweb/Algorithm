function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a)
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        result.push(sorted.indexOf(emergency[i]) + 1);
    }
    return result;
}
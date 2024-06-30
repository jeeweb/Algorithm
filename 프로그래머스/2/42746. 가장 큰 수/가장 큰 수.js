function solution(numbers) {
    const converted = numbers.map(num => String(num)).sort((a, b) => (b + a) - (a + b)).join("")
    return converted[0] === "0" ? "0" : converted
}
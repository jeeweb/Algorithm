function solution(binomial) {
    const binomialArr = binomial.split(" ");
    console.log(+binomialArr[0], binomialArr[1], +binomialArr[2])
    switch (binomialArr[1]) {
        case "+":
            return +binomialArr[0] + +binomialArr[2];
        case "-":
            return +binomialArr[0] - +binomialArr[2];
        case "*":
            return +binomialArr[0] * +binomialArr[2]
    }
}
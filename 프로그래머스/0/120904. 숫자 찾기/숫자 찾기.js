function solution(num, k) {
    return num.toString().split("").indexOf(k+"") + 1 || -1;
}
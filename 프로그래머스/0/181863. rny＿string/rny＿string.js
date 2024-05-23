function solution(rny_string) {
    return rny_string.split("").map((item) => item === "m" ? item = "rn" : item).join("")
}
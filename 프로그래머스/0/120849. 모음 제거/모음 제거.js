function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"];
    return my_string.split("").filter(str => !vowel.includes(str)).join("");
}
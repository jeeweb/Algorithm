function solution(myString) {
    return myString.split("").map(s => {
        if (s === "a") {
            return "A";
        } else if (s !== "A" && s.toUpperCase() === s) {
            return s.toLowerCase();
        } else {
            return s;
        }
    }).join("")
}
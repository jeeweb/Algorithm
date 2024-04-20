function solution(myStr) {
    const resultArray = myStr.replaceAll("b", "a").replaceAll("c", "a").split("a").filter(Boolean);
    return resultArray.length > 0 ? resultArray : ["EMPTY"];
}
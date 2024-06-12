function solution(my_string) {
    return [...my_string.split("")].map(str => 
     str.toUpperCase() === str 
     ? str.toLowerCase() 
     : str.toUpperCase()
    ).join("");
}
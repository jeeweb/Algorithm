function solution(intStrs, k, s, l) {
    return intStrs.map((cur, idx) => +cur.slice(s, s+l)).filter(num => num > k)
    
}
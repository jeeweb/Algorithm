function solution(rank, attendance) {
    const filteredArr = []
    attendance.forEach((elem, idx) => 
      elem ? filteredArr.push(rank[idx]) : ""
    )
    filteredArr.sort((a, b) => a - b);
    return rank.indexOf(filteredArr[0]) * 10000 + rank.indexOf(filteredArr[1]) * 100 + rank.indexOf(filteredArr[2])
}
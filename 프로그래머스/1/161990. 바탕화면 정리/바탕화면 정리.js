function solution(wallpaper) {
    const answer = []
    const rowList = [];
    const colList = []; 
    wallpaper.forEach((row, rowIdx) => {
        row.split("").forEach((file, colIdx) => {
            if(file === "#") {
              rowList.push(rowIdx)
              colList.push(colIdx)
            } 
        })
    })
    answer.push(Math.min(...rowList));
    answer.push(Math.min(...colList));
    answer.push(Math.max(...rowList) + 1)
    answer.push(Math.max(...colList) + 1)
    return answer;
}
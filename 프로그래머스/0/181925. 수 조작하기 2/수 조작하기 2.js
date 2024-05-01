function solution(numLog) {
    let result = "";
    let temp = 0;
    numLog.forEach((num, idx) => {
        if (idx > 0) {
            switch (num - temp) {
                case 1:
                    result += "w"
                    break;
                case -1:
                    result += "s"
                    break;
                case 10:
                    result += "d"
                    break;
                case -10:
                    result += "a"
                    break;
            }
        }
        temp = num
    })
    return result;
}
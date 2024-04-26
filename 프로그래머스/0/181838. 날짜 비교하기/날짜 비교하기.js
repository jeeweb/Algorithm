function solution(date1, date2) {
    const dateA = new Date(...date1)
    const dateB = new Date(...date2)
    
    return dateB.getTime() - dateA.getTime() > 0 ? 1 : 0
}
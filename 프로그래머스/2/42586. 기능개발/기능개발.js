function solution(progresses, speeds) {
    const answer = [];
    const workDay = [];
    for (let i = 0; i < progresses.length; i++) {
        let remain = 100 - progresses[i];
        workDay.push(Math.ceil(remain / speeds[i]));
    }
    
    while (workDay.length > 0){
        let count = workDay.findIndex(num => workDay[0] < num);
        if (count !== -1) {
            answer.push(count);
            workDay.splice(0, count);
        } else {
            answer.push(workDay.length);
            workDay.splice(0, workDay.length);
        }
    }
    
    return answer;
}
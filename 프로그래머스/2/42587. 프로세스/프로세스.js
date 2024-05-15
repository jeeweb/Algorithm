function solution(priorities, location) {
    let count = 0;
    
    const queueArr = priorities.map((priority, index) => { 
        return { priority, index }
    })
    
    const highPriority = (arr) => {
        return arr.reduce((prev, curr) => {
          return prev.priority >= curr.priority ? prev : curr
        });
    }
    
    while(queueArr.length > 0) {
        const highest = highPriority(queueArr);
        let temp = queueArr.shift();
        if (temp.priority < highest.priority) {
            queueArr.push(temp);
        } else {
            count++;    
            if (temp.index === location) {
                break;
            }
        }
    }
    return count;
}


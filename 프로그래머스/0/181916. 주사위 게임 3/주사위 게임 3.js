function solution(a, b, c, d) {
    const diceValues = [a,b,c,d]
    const diceObj = {};
    let p;
    let q;
    
    diceValues.forEach(item => {
        diceObj[item] = (diceObj[item] || 0) + 1
    })
    
    switch(Object.keys(diceObj).length) {
        case 1:
            return 1111 * diceValues[0];
        case 2:
            if (Object.values(diceObj).includes(3)) {
                p = +(Object.keys(diceObj).find(key => diceObj[key] === 3))
                q = +(Object.keys(diceObj).find(key => diceObj[key] === 1))
                return (10 * p + q) ** 2
            } else {
                p = +Object.keys(diceObj)[0]
                q = +Object.keys(diceObj)[1]
                return (p + q) * Math.abs(p - q)
            }
        case 3:
            p = Object.keys(diceObj).filter(key => diceObj[key] === 1)
            return +p[0] * +p[1]
        case 4:
            return Math.min(...diceValues);
    }
}
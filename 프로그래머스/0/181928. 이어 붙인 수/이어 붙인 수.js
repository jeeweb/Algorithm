function solution(num_list) {
    let oddNum = "";
    let evenNum = "";
    num_list.map((item, idx) => {
        item % 2 === 0 ? evenNum += item : oddNum += item
    })
    
    return oddNum * 1 + evenNum * 1;
}
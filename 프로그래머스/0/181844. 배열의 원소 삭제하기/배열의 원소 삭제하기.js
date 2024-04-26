function solution(arr, delete_list) {
    delete_list.forEach(elem => {
        if (arr.indexOf(elem) >= 0) {
            arr.splice(arr.indexOf(elem), 1);
        }
    })
    return arr;
}
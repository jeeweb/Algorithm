function solution(id_pw, db) {
    let result = "";
    for (let i = 0; i < db.length; i++) {
        if (db[i][0] === id_pw[0]) {
            if (db[i][1] === id_pw[1]) {
                return result = "login"
            } else {
                return result = "wrong pw"
            }
        } 
        result = "fail"
    }
    return result;
     
}
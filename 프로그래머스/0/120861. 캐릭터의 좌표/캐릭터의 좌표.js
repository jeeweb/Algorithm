function solution(keyinput, board) {
    const [boardX, boardY] = board;
    const limitX = Math.floor(boardX / 2)
    const limitY = Math.floor(boardY / 2)
    let x = 0;
    let y = 0;
    
    keyinput.forEach(direction => {
        switch(direction) {
            case "left":
                if (x > (limitX * -1)) x--;
                break;
            case "right":
                if (x < limitX) x++;
                break;
            case "up":
                if (y < limitY) y++;
                break;
            case "down":
                if (y > (limitY * -1)) y--;
                break;
        }
    })
    return [x, y]
}
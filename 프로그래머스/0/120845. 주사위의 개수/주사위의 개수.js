function solution(box, n) {
    const [w,h,d] = box;
    return Math.floor(w/n) * Math.floor(h/n) * Math.floor(d/n);
}
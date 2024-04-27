function solution(picture, k) {
  const answer = [];
  picture.forEach(pixel => {
    let i = 0
    while(i < k) {
      answer.push(pixel.split("").map(el => el.repeat(k)).join(""));       i++;
    }
  });
  return answer;
}
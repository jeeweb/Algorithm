function solution(n, control) {
    const controlArr = control.trim().split("");
    controlArr.forEach((item) => {
      if (item === "w") n += 1;
      if (item === "s") n -= 1;
      if (item === "d") n += 10;
      if (item === "a") n -= 10;
    })
    return n;
}
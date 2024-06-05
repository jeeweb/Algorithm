function solution(array, height) {
    array.sort((a, b) => a - b)
    const bigger = array.findIndex((h) => {
      return h > height  
    })
    return bigger >= 0 ? array.length - bigger : bigger + 1
        
}
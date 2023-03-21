function solution(x) {
    let y = x
    let sum = 0;
    while(y > 0) {
        sum += y % 10
        y = Math.floor(y / 10)
    }
    console.log(sum)
    return x % sum === 0
}
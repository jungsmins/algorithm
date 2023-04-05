function solution(sides) {
    let count = 0;
    let min = Math.abs(sides[0] - sides[1]) + 1
    let max = sides[0] + sides[1]
    for (let i = min; i < max; i++) {
        count++
    }
    return count
}
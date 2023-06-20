function solution(s) {
    const list = s.split(' ').map((num) => Number(num))
    return Math.min(...list)+' '+Math.max(...list)
}
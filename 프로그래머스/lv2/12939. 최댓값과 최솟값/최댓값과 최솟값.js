function solution(s) {
    const list = s.split(' ')
    return Math.min(...list)+' '+Math.max(...list)
}
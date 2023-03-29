function solution(n) {
    let str = '수'
    for (let i = 1; i < n; i++) {
        if (str[i - 1] === '수') {
            str += '박'
        } else if (str[i - 1] === '박') {
            str += '수'
        }
    }
    return str
}
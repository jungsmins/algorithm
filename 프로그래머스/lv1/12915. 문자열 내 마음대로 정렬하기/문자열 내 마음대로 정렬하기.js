function solution(strings, n) {
    const answer = strings.sort((a, b) => a > b ? 1 : -1)
    return answer.sort((a, b) => {
        if (b[n] > a[n]) return -1
    })
}
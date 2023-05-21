function solution(intStrs, k, s, l) {
    const answer = intStrs.map((num) => Number(num.slice(s, s + l)))
    return answer.filter((num) => Number(num) > k)
}
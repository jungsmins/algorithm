function solution(a, b) {
    return Number.MAX_SAFE_INTEGER < Math.max(a, b) ? (BigInt(a) + BigInt(b)).toString() :
    (Number(a) + Number(b)).toString()
}
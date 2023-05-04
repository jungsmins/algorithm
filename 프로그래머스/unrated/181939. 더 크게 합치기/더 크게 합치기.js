function solution(a, b) {
    const str1 = String(a) + String(b)
    const str2 = String(b) + String(a)
    return Math.max(str1, str2)
}
function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return s.length === s.replace(/[a-z]|[A-Z]/, '').length
    }
    return false
}
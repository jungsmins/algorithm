function solution(s) {
    let l  = s.indexOf('l')
    let r = s.indexOf('r')
    
    if (l === -1 && r === -1) return []
    if (l === -1 && l < r) return s.slice(r + 1, s.length + 1)
    if (r === -1 && l > r) return s.slice(0, l)
    return l < r ? s.slice(0, l) : s.slice(r + 1, s.length + 1)
}
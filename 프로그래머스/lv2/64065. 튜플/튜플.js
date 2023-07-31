function solution(s) {
    let answer = []
    let obj = {}
    s = s.replaceAll('{', '').replaceAll('}', '').split(',')
    
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) obj[s[i]] = 1
        else obj[s[i]]++
    }
    
    obj = Object.entries(obj).sort((a, b) => b[1] - a[1])
    
    return obj.map((a) => Number(a[0]))
}
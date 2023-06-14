function solution(p) {
    const result = []
    let xNum = 0;
    let num = 0;
    p = p.split(' + ')
    for (let i = 0; i < p.length; i++) {
        if (p[i].includes('x')) {
            const xCount = p[i].replace('x', '') || '1'
            
            xNum += parseInt(xCount)
        } else {
            num += parseInt(p[i])
        }
    }
    
    if (xNum > 1) result.push(`${xNum}x`)
    if (xNum === 1) result.push('x')
    if (num) result.push(num)
    return result.join(' + ')
}
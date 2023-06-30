function solution(code) {
    let mode = true
    let ret = ''
    
    for (let i = 0; i < code.length; i++) {
        
        if (code[i] === '1') {
            mode = !mode
            continue
        }
        
        if (mode && i % 2 === 0) {
            ret += code[i]
        } else if (!mode && i % 2 !== 0) {
            ret += code[i]
        }
    }
    
    return ret ? ret : 'EMPTY'
}
function solution(operations) {
    let answer = []
    
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('I')) {
            answer.push(Number(operations[i].replace(/I /g, '')))
            answer.sort((a, b) => a - b)
        }
        
        if (operations[i].includes('D -1')) {
            answer.shift()
        }
        
        if (operations[i].includes('D 1')) {
            answer.pop()
        }
    }
    
    if (answer.length === 0) return [0, 0]
    
    return [Math.max(...answer), Math.min(...answer)]
}
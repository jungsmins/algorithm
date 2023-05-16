function solution(n) {
    const arr = '0'.repeat(n).split('').map(str => Number(str))
    const answer = []
    
    for (let i = 0; i < n; i++) {
        answer.push([...arr])
        answer[i][i] = 1;
    }   
    
    return answer
}
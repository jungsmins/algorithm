function solution(k, m, score) {
    let answer = 0 ;
    score.sort((a, b) => a - b)
    
    while(score.length >= m) {
        let a = []
        a = score.splice(score.length - m, score.length)
        
        answer += Math.min(...a) * m
    } 
    
    return answer
}
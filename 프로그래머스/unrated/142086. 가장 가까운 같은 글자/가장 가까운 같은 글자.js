function solution(s) {
    const answer = []
    for(let i = 0; i < s.length; i++) {
        if (s.slice(0, i).indexOf(s[i]) === -1) {
            answer.push(s.slice(0, i).indexOf(s[i]))
        }
        
        if (s.slice(0, i).indexOf(s[i]) !== -1) {
            answer.push(s.slice(0, i + 1).lastIndexOf(s[i]) - s.slice(0, i).lastIndexOf(s[i]))  
        }
    }
    
    return answer
}
function solution(citations) {
    let arr = []
    let num = 0;
    citations.sort((a, b) => a - b)
    

    if (citations[citations.length - 1] === 0) return 0
    
    for (let i = citations.length; i > 0 ; i--) {
        let h = 0;
        for (let j = 0; j < citations.length; j++) {
            if (i <= citations[j]) h++
        }
        
        if (i <= h) return i
    }
}
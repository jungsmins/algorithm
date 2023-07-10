function solution(k, tangerine) {
    let answer = 0;
    let total = 0;
    let count = {}
    let arr = []
    
    tangerine.forEach((num) => count[num] ? count[num] += 1 : count[num] = 1) 
    
    arr = Object.values(count)
    
    arr.sort((a, b) => b - a)
    
    for (const num of arr) {
        answer++
        if (k > num) k -= num
        else break
    }
    
    return answer
}
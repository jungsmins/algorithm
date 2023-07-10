function solution(k, tangerine) {
    let answer = 0;
    let total = 0;
    let count = {}
    let arr = []
    
    tangerine.forEach((num) => {
        if (count[num] >= 1) count[num] += 1
        else count[num] = 1
    })
    
    arr = Object.values(count)
    arr.sort((a, b) => b - a)
    
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        if (total >= k) return answer = i + 1
    }
    
    return answer
}
function solution(numbers) {
    let s = numbers.sort((a,b) => a - b)
    
    return s[0] * s[1] >= (s[s.length - 1] * s[s.length - 2]) ? 
        s[0] * s[1] : (s[s.length - 1] * s[s.length - 2])
}
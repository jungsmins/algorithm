function solution(a, b, n) {
    let answer = 0;
    let newN = 0;
    
    while(n >= a) {
        newN = Math.floor(n / a) * b
        answer += newN
        n = newN + (n % a)
    }    
    
    return answer
}
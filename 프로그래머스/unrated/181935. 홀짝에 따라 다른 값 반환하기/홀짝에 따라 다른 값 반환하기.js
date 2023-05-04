function solution(n) {
    let answer = 0;
    for (let i = n; i > 0; i-=2) {
        if (i % 2 === 0) {
            answer += i ** 2
        } else {
           answer += i 
        }
    }
    return answer;
}
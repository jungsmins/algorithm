
function solution(n) {
    let answer = 0
    let a = 0
    let b = 1;
    for (let i = 2 ; i <= n + 1 ; i++) {
        answer = a + b % 1234567;
        a = b;
        b = answer;
    }
    return answer % 1234567;
}
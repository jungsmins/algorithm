function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) { // n의 약수를 구하는 반복문
        if (n % i === 0) {
            answer += i  // 구한 약수를 모두 더하는 식
        }
    }
    return answer;
}
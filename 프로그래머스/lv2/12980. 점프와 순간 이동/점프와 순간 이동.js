function solution(n)
{
    let count = 0;

    while(n) {
        if (n % 2 === 0) {
            n = n / 2
        }
        
        if (n % 2 !== 0) {
            n = n - 1
            count++
        }
    }

    return count
}

// 1. n이 짝수라면 2로 나누고 홀수라면 1을 뺀다.
// 2. n이 짝수라면 count x 0 -> 0   n이 홀수라면 count o 0 -> 1
// 3. 숫자가 0이 될 때까지 반복한다.
function solution(n, s) {
    const base = Math.floor(s / n);
    const offset = s % n;
    const answer = [];
    if (base === 0) return [-1];
    
    for (let x = 1; x <= n - offset; x++) {
        answer.push(base);
    }
    
    for (let x = 0; x < offset; x++) {
        answer.push(base + 1);
    }
    
    return answer.sort((a, b) => a - b);
}
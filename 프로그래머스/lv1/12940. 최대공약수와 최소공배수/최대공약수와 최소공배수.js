function solution(n, m) {
    let a = 0;
    let b = 1;
    
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            a = i
        }
    }
    
    while(true) {
        if (b % n === 0 && b % m === 0) {
            break;
        }
        b++
    }

    
    
    return  [a, b]
}
function solution(n) {
    
    let num1 = 0;
    let num2 = 1;
    let result = 0;
    
    for (let i = 1; i < n; i++) {
        result = num1 + num2;
        num1 = num2 % 1234567
        num2 = result % 1234567
    }
    
    return result % 1234567
}
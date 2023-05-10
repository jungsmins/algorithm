function solution(binomial) {
    const [num1, oper, num2] = binomial.split(' ')
    if (oper === '+') return Number(num1) + Number(num2)
    if (oper === '-') return num1 - num2
    if (oper === '*') return num1 * num2
}
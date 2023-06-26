function solution(n) {
    let answer = 0;
    const checkOne = (num) => {
       return num.toString(2).replaceAll('0', '').length
    }
    
    for (let i = n + 1; n < i; i++) {
        if (checkOne(n) === checkOne(i)) {
            return answer = i
        }
    }
    
    return answer
}
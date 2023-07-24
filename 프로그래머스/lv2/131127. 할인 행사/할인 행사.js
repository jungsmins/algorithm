function solution(want, number, discount) {
    var answer = 0;
    let count = 0;
    let obj = {}
    want.forEach((a, i) => obj[a] = number[i])

    for (let i = 0; i <= discount.length - 10; i++) {
        let newObj = {...obj}
        for (let j = i; j < 10 + i; j++) {
            if (newObj[discount[j]]) newObj[discount[j]] -= 1
        }
         
        if (Object.values(newObj).filter((a) => a === 0).length === want.length) count++
    }
    
    
    return count
}
function solution(strArr) {
    const obj = {}
    let result = 0;
    strArr.map((str) => {
        if (obj[str.length]) obj[str.length] += 1
        else obj[str.length] = 1
    })
    
    for (let num in obj) {
        if (obj[num] >= result) result = obj[num]
    }
    return result
}
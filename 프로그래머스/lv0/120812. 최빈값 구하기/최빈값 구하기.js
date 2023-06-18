function solution(array) {
    const obj = {}
    let result = 0
    let check = 0
    array.map((num) => {
        if (!obj[num]) obj[num] = 1
        else obj[num] += 1
    })
    
    for (let key in obj) {
        console.log(key, obj[key])
        if (obj[key] > check) {
            result = key
            check = obj[key]
        } else if (obj[key] === check) {
            result = -1
            check = obj[key]
        }
    }
    return Number(result)
}
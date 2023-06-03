function solution(arr, queries) {
    let result = []
    for (let i = 0; i < queries.length; i++) {
        let arr2 = []
        arr2 = arr.slice(queries[i][0], queries[i][1] + 1)
        arr2 = arr2.filter((num) => num > queries[i][2])
        
        if (arr2.length === 0) result.push(-1)
        else result.push(Math.min(...arr2))
    }
    return result
}
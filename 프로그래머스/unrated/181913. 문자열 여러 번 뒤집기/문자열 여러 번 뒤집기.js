function solution(str, queries) {
    
    queries.forEach((a) => {
        
        str = str.slice(0, a[0]) + str.slice(a[0], a[1] + 1).split('').reverse().join('') + str.slice(a[1] + 1)
    })
    return str
}
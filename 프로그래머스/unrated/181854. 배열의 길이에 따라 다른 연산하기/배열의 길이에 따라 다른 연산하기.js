function solution(arr, n) {
    const odd = arr.map((num, i) => {
        if (i % 2 === 0) return num + n
        else return num
    })
    const even = arr.map((num, i) => {
        if (i % 2 !== 0) return num + n
        else return num
    })
    
    return arr.length % 2 !== 0 ? odd : even
}
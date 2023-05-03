function solution(arr, n) {
    const odd = arr.map((num, i) => i % 2 === 0 ? num + n :num)
    
    const even = arr.map((num, i) => i % 2 !== 0 ? num + n : num)
    
    return arr.length % 2 !== 0 ? odd : even
}
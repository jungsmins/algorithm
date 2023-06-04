function solution(arr) {
    let c = arr[0].length
    let r = arr.length
    
    if (r > c) {
        let p = []
        for (let i = 0; i < r - c; i++) {
            p.push(0)
        }
        return arr.map((a) => a.concat(p))
    }
    
    if (c > r) {
        let p = []
        for (let i = 0; i < c; i++) {
            p.push(0)
        }
        for (let i = 0; i < c - r; i++) {
            arr.push(p)
        }
        return arr
    }
    
    return arr
}
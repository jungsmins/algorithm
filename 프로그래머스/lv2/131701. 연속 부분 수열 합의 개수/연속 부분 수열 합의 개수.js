function solution(elements) {
    let arr = []
    const Length = elements.length
    const newElements = elements.concat(elements)

    for (let i = 1; i < Length + 1; i++) {
        for (let j  = 0; j < Length; j++) {
            arr.push(sum(newElements.slice(j, i + j)))
        }
    }
    
    function sum(arr2) {
        let num = 0;
        arr2.forEach((n) => num += n)
        return num
    }
        
    
    return new Set(arr).size
}
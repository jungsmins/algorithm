function solution(arr) {
    const result = [arr[0]]
    
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] !== result[result.length - 1]) result.push(arr[i])
        else if (arr[i] === result[result.length - 1]) result.pop()
    }
    return result.length < 1 ? [-1] : result 
}
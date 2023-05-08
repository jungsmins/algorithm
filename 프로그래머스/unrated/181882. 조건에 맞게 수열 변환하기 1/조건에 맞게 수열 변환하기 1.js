function solution(arr) {
    const numCheck = (num) => {
        if (num >= 50 && num % 2 === 0) return num / 2
        if (num < 50 && num % 2 !== 0) return num * 2
        return num
    }
    
    
    return arr.map((num) => numCheck(num))
}
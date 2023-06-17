function solution(s) {
    return [...s].map((str, i) => {
        let count = s.slice(0, i).lastIndexOf(str)
        return count < 0 ? count : i - count
    })
    
    return answer
}
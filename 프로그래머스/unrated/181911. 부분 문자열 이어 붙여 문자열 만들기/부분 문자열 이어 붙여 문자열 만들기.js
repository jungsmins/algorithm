function solution(my_strings, parts) {
    let answer = parts.reduce((acc, [f, s], i) => {
        acc += my_strings[i].slice(f, s + 1)
        
        return acc
    }, '')
    return answer
}
function solution(my_string, is_suffix) {
    const strLength = is_suffix.length
    
    return my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0
}
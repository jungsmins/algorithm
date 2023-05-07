function solution(my_string, is_prefix) {
    const strLength = is_prefix.length 

    return my_string.slice(0, strLength) === is_prefix ? 1 : 0
}
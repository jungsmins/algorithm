function solution(my_string, target) {
    return my_string.split(target).length !== 1 ? 1 : 0
}
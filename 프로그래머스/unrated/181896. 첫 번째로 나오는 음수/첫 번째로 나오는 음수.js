function solution(num_list) {
    return num_list.indexOf(num_list.find((num) => num < 0))
}
function solution(num_list) {
    let lastNum = num_list[num_list.length - 1]
    if (lastNum - num_list[num_list.length - 2] > 0) {
        num_list.push(lastNum - num_list[num_list.length -2])
    } else {
        num_list.push(lastNum * 2)
    }
    return num_list
}
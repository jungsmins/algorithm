function solution(num_list) {
    const arr = [0, 0]
    num_list.forEach(num => {
        if (num % 2 === 0) arr[0]++
        else if (num % 2 !== 0) arr[1]++
    })
    return arr
}
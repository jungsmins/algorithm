function solution(num_list, n) {
    const answer = num_list.splice(0, n)
    
    return [...num_list, ...answer]
}
function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    num_list.forEach((num, i) => {
        i % 2 === 0 ? even += num : odd += num 
    })
    return odd >= even ? odd : even 
}
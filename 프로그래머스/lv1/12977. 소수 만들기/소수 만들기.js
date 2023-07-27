function solution(nums) {
    let answer = []
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let arr = []
            arr.push(nums[i])
            arr.push(nums[j])
            for (let k = j + 1; k < nums.length; k++) {
                arr.push(nums[k])
                answer.push(arr)
                arr = arr.slice(0, 2)
            }
        }
    }
    
    function prime(num) {
        let count = 0;
        for (let k = 1; k <= num; k++) {
            if (num % k === 0) {
                count++
            }
        }
        
        return count <= 2 ? true : false
    }

    return answer.filter((a) => prime(a[0] + a[1] + a[2])).length
}
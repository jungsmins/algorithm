function solution(food) {
    const answer = [0];
    for (let i = food.length - 1; i > 0; i--) {
        let num = food[i]
        while(1 < num) {
            answer.push(i)
            answer.unshift(i)
            
            num -= 2
        }
    }
    
    return answer.join('')
}
function solution(cards1, cards2, goal) {
    let count = 0;
    for (let i = 0; i < goal.length; i++) {
        if (cards1[0] === goal[i]) {
            cards1.shift()
            count++
            continue
        } else if (cards2[0] === goal[i]) {
            cards2.shift()
            count++
            continue
        }
        break;
    }
    
    return count === goal.length ? 'Yes' : 'No'
}
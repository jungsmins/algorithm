function solution(people, limit) {
    let count = 0;
    let peoples = people.length - 1
    
    people.sort((a, b) => b - a)

    for (let i = 0; i <= peoples; i++) {
        if (people[i] + people[peoples] <= limit) peoples--;
        
        count++
    }
    
    return count
}
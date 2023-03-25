function solution(hp) {
    let result = 0;
    
    if (hp >= 5) {
        result += (hp - hp % 5) / 5
        hp = hp - (hp - hp % 5) 
    }
       
    if (hp >= 3) {
        result += (hp - hp % 3) / 3
        hp = hp - (hp - hp % 3)
    }
    
    result += hp === 2 ? 2 : (hp === 1 ? 1 : 0)
    
    return result
}
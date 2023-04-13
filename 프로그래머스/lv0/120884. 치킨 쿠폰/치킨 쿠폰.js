function solution(chicken) {
    let result = 0;
    
    while(chicken >= 10) {
        result += parseInt(chicken / 10);
        chicken = chicken % 10 + parseInt(chicken / 10)
    }
    
    return result
}
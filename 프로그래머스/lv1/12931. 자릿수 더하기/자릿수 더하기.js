function solution(n) {
    let answer = 0;
    let nArr = String(n).split("")
    nArr.forEach(num => answer += Number(num))
    
    return answer;
}
function solution(k, score) {
    var answer = [];
    let arr = []
    for (let i = 0; i < score.length; i++) {
        arr.unshift(score[i])
        arr.sort((a, b) => b - a)
        arr = arr.slice(0, k)
        
        
        answer.push(Math.min(...arr))
    }
    return answer;
}
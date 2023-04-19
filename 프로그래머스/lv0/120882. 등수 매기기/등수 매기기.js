function solution(score) {
    let result = [];
    let newScore = [];
    for (let i = 0; i < score.length; i++) {
        newScore.push(score[i][0] + score[i][1])
        result.push(1)
    }

    
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (newScore[i] < newScore[j]) {
                result[i]++
            }
        }
    }
     
    return result
}
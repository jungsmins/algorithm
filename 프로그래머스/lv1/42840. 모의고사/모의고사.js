function solution(answers) {
    let answer = []
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (one[i % one.length] === answers[i]) {
            score[0]++;
        }
        if (two[i % two.length] === answers[i]) {
            score[1]++;
        }
        if (three[i % three.length] === answers[i]) {
            score[2]++;
        }
    }
    
    const max = Math.max(...score);
    
    if (score[0] === max) answer.push(1)
    if (score[1] === max) answer.push(2)
    if (score[2] === max) answer.push(3)
    
    return answer;
}
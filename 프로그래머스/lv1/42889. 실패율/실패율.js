function solution(N, stages) {
    var answer = []
    let stagesLength = 0;
    let obj = {}
    
    for (let i = 1; i <= N; i++) {
        stagesLength = stages.length;
        stages = stages.filter((v) => v !== i)
        obj[i] = (stagesLength - stages.length) / stagesLength
    }
    
    for(let key in obj){
        answer.push([key, obj[key]]);
    }
    
    answer.sort((a, b) => {
        return b[1] - a[1];
    })
    
    let ans = [];
    
    for(let i = 0; i < answer.length; i++){
        ans.push(Number(answer[i][0]));
    }
    
    
    return ans
}
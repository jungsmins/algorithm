function solution(progresses, speeds) {
    var answer = [];
    let deploy = 0;    
    
    while (progresses.length > 0) {
        for(let i=0; i<progresses.length; i++){
            progresses[i] += speeds[i];
        }
        
        while(true) {
            if(progresses[0] >= 100){
                deploy +=1;
                progresses.shift();
                speeds.shift();
            }
            else{
                if(deploy !==0){
                    answer.push(deploy);
                }
                deploy = 0;
                break;
            }
        }
    }
    return answer;
}
function solution(lottos, win_nums) {
    var answer = [];
    let zero = []; 
    let tmp = []; 
    
    for(let i = 0; i < 6; i++) {
        if(lottos[i] === 0) {
            zero.push(lottos[i])
        } else {
            for(let j = 0; j < 6; j++) {
                if(lottos[i] === win_nums[j]) {
                    tmp.push(lottos[i])
                }
            }
        }
    }
    
    if(tmp.length === 0 && zero.length === 0) {
        return [6,6]
    }
    
    answer[0] = 7 - (tmp.length + zero.length);

    if(tmp.length >= 2) {
        answer[1] = 7 - (tmp.length);
    } else {
        answer[1] = 6;
    }

    return answer;
}
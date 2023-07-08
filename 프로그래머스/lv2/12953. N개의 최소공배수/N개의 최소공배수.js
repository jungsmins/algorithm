function solution(arr) {
    let answer = 0;
    let n = 1
    let check = false;
    
    while(!check) {
        n++;
        for(let i = 1; i < arr.length; ++i){
            if((arr[0] * n) % arr[i]  === 0){
                check = true;
            } else {
                check = false;
                break;
            }
        }
    }
    
    answer = arr[0] * n;
    return answer;
}
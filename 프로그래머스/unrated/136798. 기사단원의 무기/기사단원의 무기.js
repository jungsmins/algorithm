function solution(number, limit, power) {
    let answer = 0;
    for(n = 1; n <= number; n++){
        let index = 1;
        let num = 0;
        let flag = false;
        
        while(index*index <= n){
            if (n % index === 0) {
                num++;
                if (index * index !== n) num++;
            }
            index++;
            if (num > limit) {
                flag = true;
                break;
            }
        }
        answer += flag ? power : num;
    }
    return answer
}
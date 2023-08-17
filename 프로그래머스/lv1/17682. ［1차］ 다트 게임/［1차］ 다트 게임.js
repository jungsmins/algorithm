function solution(dartResult) {
    let arr = [0,0,0];
    let point = -1; 
    for (var i = 0 ; i < dartResult.length; i++) {
        if (Number.isInteger(dartResult[i] * 1)) {
            point++;
            if (dartResult[i] == '1' && dartResult[i+1] == '0') {
                arr[point] += 10;
                i++;
                continue;
            }
            else arr[point] += dartResult[i] * 1;
        }
        else {
            if (dartResult[i] == 'D') arr[point] **= 2;
            else if (dartResult[i] == 'T') arr[point] **= 3;
            else if (dartResult[i] == '*') {
                arr[point] *= 2;
                arr[point - 1] *= 2;
            }
            else if (dartResult[i] == '#') arr[point] *= (-1);
        }
    }
    return arr.reduce((a, b) => a+b);
}
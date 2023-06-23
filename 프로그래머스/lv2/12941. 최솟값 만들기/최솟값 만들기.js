function solution(A,B){
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
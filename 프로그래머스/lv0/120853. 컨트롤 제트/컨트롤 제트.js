function solution(s) {
    var answer = 0;
    s = s.split(" ").map(num => Number(num))
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            answer = answer - s[i - 1];
        } else {
            answer += s[i]
        }
    }
    return answer;
}
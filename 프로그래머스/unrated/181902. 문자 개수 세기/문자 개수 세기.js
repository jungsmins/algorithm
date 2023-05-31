function solution(my_string) {
    const answer = []
    for (let i = 0; i < 52; i++) {
        answer.push(0)
    }
    for (let i = 0; i < my_string.length; i++) {
        if ([my_string[i].charCodeAt(0) - 65] > 26) {
            answer[my_string[i].charCodeAt(0) - 71]++
        } else {
            answer[my_string[i].charCodeAt(0) - 65]++
        }
    }
    return answer;
}
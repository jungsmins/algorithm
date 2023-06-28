function solution(n, words) {
    var answer = [];

    for (let i = 1; i < words.length; i++) {
        if (words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
            words.slice(0, i).includes(words[i])) {
            if ((i + 1) % n === 0) {
                answer.push(n)
                answer.push(Math.ceil((i + 1) / n))
                break;
            } else {
                answer.push((i + 1) % n)
                answer.push(Math.ceil((i + 1) / n))
                break;
            }
        }
    }

    
    
    // arr[0]에는 i % n 의 값을 넣어 주면 된다.
    // arr[1]에는 틀린 값의  / n 의 올림
    return answer.length ? answer : [0, 0]
}
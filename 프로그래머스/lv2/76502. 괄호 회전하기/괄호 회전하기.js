function solution(s) {
    let count = '';
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        count += checked(s)
        s.push(s[0])
        s.shift()
    }
    
    function checked(str) {
        let arr = []
    
        for (let i = 0; i < str.length; i++) {
            if (arr[arr.length - 1] + str[i] === '[]' ||
                arr[arr.length - 1] + str[i] === '{}' ||
                arr[arr.length - 1] + str[i] === '()') {
                arr.pop()
            } else arr.push(str[i])
        }

        return arr.length === 0 ? 'O' : 'X'
    }
    
    return count.replaceAll('X', '').length
}

// 첫번째 문자를 넣고 2번째 문자 혹은 마지막 문자가 닫는 문자라면 배열에 넣고
// 아니라면 원래 있던 문자를 빼고 다음 문자를 넣는다.


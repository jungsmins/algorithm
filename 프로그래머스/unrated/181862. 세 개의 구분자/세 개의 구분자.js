function solution(myStr) {
    const arr = ['a', 'b', 'c']
    let str = ''
    for (let i = 0; i < myStr.length; i++) {
        if (!arr.includes(myStr[i])) str += myStr[i]
        else if (arr.includes(myStr[i]) && !arr.includes(myStr[i - 1])) str += ' '
    }
    const answer = str.split(' ').filter((str) => str !== '')
    return answer.length > 0 ? answer : ['EMPTY'] 
}
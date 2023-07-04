function solution(s) {
    const eNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for (let i = 0; i < eNum.length; i++) {
        s = s.replaceAll(eNum[i], i)
    }
    return Number(s)
}
function solution(spell, dic) {
    var answer = 0;
    // 1. dic 을 반복한다.
    // 2. dic에서 spell을 삭제한다.
    spell = spell.sort().join('')
    dic = dic.filter(s => [...s].sort().join('') === spell)
    return dic.length > 0 ? 1 : 2
}
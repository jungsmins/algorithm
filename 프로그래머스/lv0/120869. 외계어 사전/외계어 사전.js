function solution(spell, dic) {
    var answer = 0;
    // 1. dic 을 반복한다.
    // 2. dic에서 spell을 삭제한다.
    let count = 0;
    spell = spell.sort()
    dic.forEach((str) => {
        if(str.split('').sort().join('') === spell.join('')) count++
    })
    
    return count > 0 ? 1 : 2
}
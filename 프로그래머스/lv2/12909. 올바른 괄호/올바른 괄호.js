function solution(s){    
    const count = [];
    
    for(let i = 0; i < s.length; i++) {
        if (count[count.length - 1] === '(' && s[i] === ')') {
            count.pop();
        } else {
            count.push(s[i]);
        }
    }
    
    return !count.length;
}
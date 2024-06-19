function solution(s, skip, index) {
    let newWord = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [...alphabet]
    
    arr = arr.filter((a) => !skip.includes(a))
    
    console.log(arr)
    
    for (let i = 0; i < s.length; i++) {
        let check = arr.indexOf(s[i]) + index

        if (check >= arr.length) {
            check = check % arr.length;
        } 
        
        
        newWord.push(arr[check])
    }
    
    console.log(newWord)
    return newWord.join('')
}
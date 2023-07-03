function solution(n, arr1, arr2) {
    arr1 = arr1.map((v, i) => {
        let two = ((v | arr2[i]).toString(2))
 
        two = two.replaceAll('1', '#')
        two = two.replaceAll('0', ' ')
        
        if (two.length < n) {
           two = ' '.repeat(n - two.length) + two
        } 
        
        return two
    })
    
    return arr1
}
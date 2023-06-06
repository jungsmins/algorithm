function solution(picture, k) {
    const answer = []
    let str = ''
    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < picture[i].length; j++) {
            str += picture[i][j].repeat(k)
        }
        
        for (let x = 0 ; x < k; x++) {
            answer.push(str)
        }
        str = ''
    }
    
    return answer
}
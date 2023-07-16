function solution(clothes) {
    let check = {}
    for (let i = 0; i < clothes.length; i++) {
        if (check[clothes[i][1]] > 0) check[clothes[i][1]]++
        else check[clothes[i][1]] = 1
    }
    
    return Object.values(check).reduce((ac, v) => ac * (v + 1), 1) - 1
}
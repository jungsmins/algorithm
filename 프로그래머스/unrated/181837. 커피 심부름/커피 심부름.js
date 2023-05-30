function solution(order) {
    let cost = 0;
    return order.reduce((a, c) => { 
        if(c.includes('americano')) a += 4500
        else if (c.includes('cafelatte')) a += 5000
        else a += 4500
        return a
     }, 0)
}
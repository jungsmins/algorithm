function solution(price) {
    if (price >= 500000) {
        return parseInt(price - price * (20 / 100))
    } else if (price >= 300000 ) {
        return parseInt(price - price * (10 / 100))
    } else if (price >= 100000) {
        return parseInt(price - price * (5 / 100))
    }
    return price
}
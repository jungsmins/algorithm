function solution(numlist, n) {
    numlist = numlist.map((num) => num - n)
    numlist = numlist.sort((a, b) => {
        if (Math.abs(a) === Math.abs(b)) {
            return b - a
        }
        return Math.abs(a) - Math.abs(b)
    })
    return numlist.map((num) => num + n) 
}
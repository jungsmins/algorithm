function solution(numbers, direction) {
    if (direction === 'right') {
        let num = numbers.pop()
        numbers.unshift(num)
        return numbers
    } else if (direction === 'left') {
        let num = numbers.shift()
        numbers.push(num)
        return numbers
    }
}
function solution(numbers) {
    const answer = []
    numbers.forEach((num, i, arr) => {
        const r = arr.slice(i + 1)
        r.forEach((num2) => answer.push(num + num2))
    })
    return [...new Set(answer)].sort((a, b) => a - b)
}
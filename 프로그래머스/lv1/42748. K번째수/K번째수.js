function solution(array, commands) {
    const result = []
    commands.forEach((arr, i) => {
        const num = arr[2]
        const newArray = array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)
        result.push(newArray[num - 1])
    })
    return result
}
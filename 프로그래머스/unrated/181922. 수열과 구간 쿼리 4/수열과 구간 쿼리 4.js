function solution(arr, queries) {
    queries.map((querie) => {
        for (let i = querie[0]; i <= querie[1]; i++) {
            if (i % querie[2] === 0) arr[i]++
        }
    })
    return arr
}
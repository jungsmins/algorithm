function solution(arr, idx) {
    arr = arr.slice(idx)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) return idx + i
    }
    return -1
}
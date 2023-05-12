function solution(arr1, arr2) {
    if (arr1.length > arr2.length) return 1
    if (arr1.length < arr2.length) return -1
    let a = 0;
    let b = 0;
    arr1.forEach((num, i) => {
        a += num
        b += arr2[i]
    })
    return a > b ? 1 : (a < b ? -1 : 0)
}
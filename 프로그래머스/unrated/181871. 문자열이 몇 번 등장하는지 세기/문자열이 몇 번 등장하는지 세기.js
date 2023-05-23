function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
        if (pat === myString.slice(i, i + pat.length)) count ++
    }
    return count
}
function solution(l, r) {
    const result = [];
    for (let i = l ; i <=r ; i++) {
        if (!(i+"").match(/[^50]+/)) result.push(i)
    }
    return result.length ? result : [-1];
}
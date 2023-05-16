function solution(a, b) {
    const add = Number(String(a) + String(b))
    const mul = 2 * a * b
    return add > mul ? add : mul
}
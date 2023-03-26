function solution(age) {
    age = String(age).split('').map(s => String.fromCharCode(Number(s) + 97)).join('')

    return age
}
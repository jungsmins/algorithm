function solution(my_string) {
    let str = ''
    for (let i = 0; i < my_string.length; i++) {
        str += Number(my_string[i])
    }
    return str.split('NaN').reduce((acc, cur) => acc + Number(cur), 0)
}
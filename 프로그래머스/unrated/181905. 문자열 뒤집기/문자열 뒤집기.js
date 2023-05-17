function solution(my_string, s, e) {
    const str1 = my_string.slice(s, e + 1)
    
    return my_string.replace(str1, str1.split('').reverse().join(''))
}
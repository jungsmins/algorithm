function solution(my_string) {
    let result = my_string.replace(/[^0-9]/g, "");
    return result.split("").sort().map(num => Number(num))
}
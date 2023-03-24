function solution(my_string) {
    let numList = my_string.match(/[0-9]/g)
    
    return numList.reduce((acc, cur) => acc + Number(cur) , 0)
}
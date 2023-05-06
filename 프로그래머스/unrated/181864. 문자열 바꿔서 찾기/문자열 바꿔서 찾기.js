function solution(myString, pat) {
    myString = myString.replaceAll('A', 'C')
    myString = myString.replaceAll('B', 'A')
    myString = myString.replaceAll('C', 'B')
    
    return myString.includes(pat) ? 1 : 0
}
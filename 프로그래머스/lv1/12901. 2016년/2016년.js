function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let answer = Date.UTC(2016, a - 1, b)
    let check = new Date(answer)
    return days[check.getDay()]
}
function solution(rank, attendance) {
    const rank2 = rank.filter((num, i) => attendance[i]).sort((a, b) => (a - b))
    
    
    return (10000 * rank.indexOf(rank2[0])) + (100 * rank.indexOf(rank2[1])) + rank.indexOf(rank2[2])
}
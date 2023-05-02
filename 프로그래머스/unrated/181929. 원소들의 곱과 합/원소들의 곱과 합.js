function solution(num_list) {
    const mul = num_list.reduce((acc, num) => acc * num, 1);
    const sum = num_list.reduce((acc, num) => acc + num, 0);
    return sum ** 2 > mul ? 1 : 0;
}
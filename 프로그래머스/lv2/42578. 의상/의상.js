function solution(clothes) {
    return Object.values(clothes.reduce((ac, [_, k]) => {
        ac[k] = (ac[k] ?? 0) + 1;
        return ac;
    }, {})).reduce((ac, v) => ac * (v + 1), 1) - 1;
}
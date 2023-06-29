function solution(brown, yellow) {

    let width = (brown / 2) + 2;

    for (let i = width - 1; i >= width / 2; i--) {
        let r = i;
        let c = width - i;
        if (yellow === (r - 2) * (c - 2)) {
            return [r, c]
        }
    }
}
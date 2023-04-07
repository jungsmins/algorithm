function solution(keyinput, board) {
    let result = [0, 0]
    let [ mapWidth, mapHeight ] = board
    mapWidth = Math.floor(mapWidth / 2)
    mapHeight = Math.floor(mapHeight / 2)
    
    keyinput.forEach((s) => {
        if (s === 'left' && Math.abs(result[0] - 1) <= mapWidth) {
            result[0] -= 1
        } else if (s === 'right' && Math.abs(result[0] + 1) <= mapWidth) {
            result[0] += 1
        } else if (s === 'down' && Math.abs(result[1] - 1) <= mapHeight ) {
            result[1] -= 1
        } else if (s === 'up' && Math.abs(result[1] + 1) <= mapHeight) {
            result[1] += 1
        }
    })

    return result
}
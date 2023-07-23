function solution(cacheSize, cities) {
    let answer = 0;
    let cache = []
    cities = cities.map((city) => city.toUpperCase())
    
    if (cacheSize === 0) return (
        cities.length * 5
    )
    
    for (let i = 0; i < cities.length; i++) {
        if (cache.includes(cities[i])) {
            cache = cache.filter((c) => c !== cities[i])
            cache.push(cities[i])
            answer += 1
        } else if (cache.length === cacheSize) {
            cache.push(cities[i])
            cache.shift()
            answer += 5
        } else {
            cache.push(cities[i])
            answer += 5
        }
    }
    
    return answer;
}
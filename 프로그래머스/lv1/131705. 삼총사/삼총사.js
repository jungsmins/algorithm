function solution(number) {
    let count = 0;
    let result = [];
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 

        arr.forEach((n, i, arr) => {
          const rest = arr.slice(i + 1); 
          const combinations = getCombinations(rest, selectNumber - 1); 
          const attached = combinations.map((el) => [n, ...el]); 
          results.push(...attached); 
        });

        return results; 
    }
    
    result = getCombinations(number, 3)
    result.map((arr) => {
        let total = 0;
        for(let i = 0; i < arr.length; i++) {
            total += arr[i]
        }
        if (total === 0) count++
    })
    return count
}
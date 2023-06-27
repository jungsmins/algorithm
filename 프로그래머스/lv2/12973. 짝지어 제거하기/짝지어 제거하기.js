function solution(s) {
    const result = [];

    for(let i = 0 ; i < s.length ; i++ ) {
        if( !result.length || result[result.length - 1] !== s[i] ) {
            result.push(s[i]);
        } else result.pop();
    }

  return result.length ? 0 : 1;
}
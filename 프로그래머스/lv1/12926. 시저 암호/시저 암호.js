function solution(s, n) {
    s = s.split("")
    s = s.map((st)=>{
        if (st == " "){
            return st;
        }
        const tmp = st.charCodeAt()
        return st.toUpperCase().charCodeAt()+n > 90 
            ? String.fromCharCode(tmp + n - 26) 
            : String.fromCharCode(tmp + n)
    })
    return s.join('')
}
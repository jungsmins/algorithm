function solution(str1, str2) {
    let answer = 0;
    let arr1 = [];
    let arr2 = [];
   
    for (let i=0; i<str1.length-1; i++){
        let reg = /^[a-zA-Z]+$/;
        if(reg.test(str1[i]) && reg.test(str1[i+1])){
            let str = str1[i]+str1[i+1];
            arr1.push(str.toLowerCase());    
        }
    }
    for (let i=0; i<str2.length-1; i++){
         let reg = /^[a-zA-Z]+$/;
        if(reg.test(str2[i]) && reg.test(str2[i+1])){
            let str = str2[i]+str2[i+1];
            arr2.push(str.toLowerCase());    
        }
    }
    
    if (arr1.length ===0 && arr2.length === 0){
        return 65536;
    }
    
    let unionArr = Object.assign([],arr1);
    let interArr = [];
    let checkArr = [];
    for (let i=0; i<arr2.length; i++){
        let isNew = true;
        let idx = 0;
        for (let j=0; j<unionArr.length; j++){
            if ((arr2[i] === unionArr[j]) && (checkArr[j] !== true && j<arr1.length)){
                isNew = false;
                idx = j;
                break;
            }
        }
        if (isNew){
            unionArr.push(arr2[i]);
        }else{
            checkArr[idx] = true;
            interArr.push(arr2[i])
        }
    }
    console.log(arr1,arr2,unionArr,interArr);
    answer = Math.floor(interArr.length/unionArr.length*65536);
    return answer;
}
// function solution(s, n) {
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var answer= '';

//     for(var i =0; i <s.length; i++){
//         var text = s[i];
//         if(text == ' ') {
//             answer += ' '; 
//             continue;
//         }
//         var textArr = upper.includes(text) ? upper : lower;
//         var index = textArr.indexOf(text)+n;
//         if(index >= textArr.length) index -= textArr.length;
//         answer += textArr[index];
//     }
//     return answer;
// }


function solution(s, n) {
    let answer='';
     answer=s.split("").map((a)=>{
        if (a == " ")return a;
        let code = a.charCodeAt()   
        //string.charCodeAt(index) : index에 해당하는 문자의 unicode 값을 리턴
        // (A:65 a:97)26차이
        // let result = code+n <122? String.fromCharCode(code+n) : String.fromCharCode(code+n-26) 
        let result = a.toUpperCase().charCodeAt()+n > 90 
             ? String.fromCharCode(code+n-26) 
             : String.fromCharCode(code+n) 
        // fromCharCode : 입력받은 유니코드를 해당 유니코드가 의미하는 문자열로 변환
         return result
    }).join('')
  
    //console.log(answer)
    return answer;
}


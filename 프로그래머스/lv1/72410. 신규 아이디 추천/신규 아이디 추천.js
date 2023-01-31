// 수정코드
function solution(new_id) {
    let answer = new_id
            .toLowerCase()                  // 1단계
            .replace(/[^\w\-\.]/g,"")       // 2단계
            .replace(/\.{2,}/g, ".")        // 3단계 /\.{2,}/g
            .replace(/^\.|\.$/, "")         //4단계
            .replace(/^$/, "a")             // 5단계
            .slice(0, 15)                   // 6-1단계
            .replace(/\.$/, "")             //6-2단계
    
    if (answer.length <= 2) {
        answer = answer + answer[answer.length - 1].repeat(3 - answer.length);
    }
    return answer;
} 


// 이전코드
// function solution(new_id) {
//     new_id = new_id.toLowerCase();              // 1단계
//     new_id = new_id.replace(/[^\w\-\.]/g,"");   // 2단계
//     //w : 알파벳, 숫자로 된 문자, 밑줄 기호(_) , [^ ]:not
//     //console.log(new_id)
//     new_id = new_id.replace(/\.{2,}/g, ".");    // 3단계 /\.{2,}/g
//     //console.log(new_id)
//     new_id = new_id.replace(/^\.|\.$/, "")      //4단계 or연산자로 시작이거나 끝이면
//     console.log(new_id)   
//     new_id = new_id.replace(/^$/, "a");         // 5단계
//     new_id = new_id.slice(0, 15);               // 6-1단계
//     new_id = new_id.replace(/\.$/, "");         //6-2단계

//     let len = new_id.length;
//     new_id = (len > 2) ? new_id : new_id + new_id.charAt(len - 1).repeat(3 - len);
//     //String으로 저장된 문자열 중에서 한 글자만 선택해서 char타입으로 변환 ()안에는 인덱스 번호
    
//     return new_id;
// }

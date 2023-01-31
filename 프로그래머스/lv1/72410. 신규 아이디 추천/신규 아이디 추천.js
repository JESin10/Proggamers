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


// 이전
// function solution(new_id) {
//     new_id = new_id.toLowerCase();              // 1단계
//     new_id = new_id.replace(/[^\w\-\.]/g,"");   // 2단계
//     new_id = new_id.replace(/\.{2,}/g, ".");    // 3단계 /\.{2,}/g
//     new_id = new_id.replace(/^\.|\.$/, "")      //4단계
//     new_id = (new_id.length == 0)? "a":'';      // 5단계
//     new_id = new_id.slice(0, 15);               // 6-1단계
//     new_id = new_id.replace(/\.$/, "");         //6-2단계

//     let len = new_id.length;
//     (len > 2) ? new_id : new_id + new_id.charAt(len - 1).repeat(3 - len);

//     return new_id;
// }
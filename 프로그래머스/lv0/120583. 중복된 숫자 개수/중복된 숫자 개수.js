// 풀어쓰기
// function solution(array, n) {
//     var answer = 0;
//     for(let i=0;i<array.length;i++){
//         if (array[i]==n){
//             answer=answer+1;
//         } else {
//             answer ;
//         }
//     }
//     return answer;
// }


//줄여쓰기
function solution(array, n) {
    var answer = 0;
    for(let i=0;i<array.length;i++){
        array[i]==n ? answer=answer+1 :answer ;
    }
    return answer;
}

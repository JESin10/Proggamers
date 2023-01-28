// function solution(n) {
//     var answer = 0;
//     answer = Math.sqrt(n);
//     if(answer%1==0){
//         answer = (answer+1)*(answer+1);
//     } else{
//         answer =-1;
//     }
//     //console.log(answer);
//     return answer;
// }

//줄여보자
function solution(n) {
    // var answer = 0;
    // answer = Math.sqrt(n);
    // answer = answer%1==0? Math.pow(answer+1,2):-1;
    
    return Math.sqrt(n) %1 == 0 ? Math.pow(Math.sqrt(n)+1,2):-1;
}

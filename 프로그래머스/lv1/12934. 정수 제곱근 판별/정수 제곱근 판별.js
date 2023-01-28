// function solution(n) {
//     var answer = 0;
//     for (let x=1;x<n;x++){
//         if(n==x*x){
//             answer = (x+1)*(x+1);
//         } else{
//             answer = -1;
//         }
//     }
//     return answer;
// }


function solution(n) {
    var answer = 0;
    answer = Math.sqrt(n);
    if(answer%1==0){
        answer = (answer+1)*(answer+1);
    } else{
        answer =-1;
    }
    //console.log(answer);
    return answer;
}


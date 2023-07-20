// function solution(n) {
// var answer = 0;
//     for(i=1;i<=n;i++){
//         if(n%i===0) answer++;
//     }
//     return answer;
// }

//제곱수이용
function solution(n) {
    var answer = 0;
    for(i=1;i*i<n;i++){
        if(n%i==0) answer++;
    }
    return Number.isInteger(Math.sqrt(n))? (answer*2)+1:answer*2;
}

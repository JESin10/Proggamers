// while문을 이용한 코드
function solution(n) {
    var answer = [];
    while (n<=100&&n>0){
        if(n%2==1){
            answer.push(n);
            n=n-2;
        } else {
           answer.push();
           n=n-1;
        }
    }
    var result = answer.sort(function(a, b){ return a-b;  }); // 선언을 while위에 해서 정렬이 되지않음! 주의
    return result;
}

// for문을 이용한 코드

// function solution(n) {
//     var answer = [];
    
//     for(let i = 1; i <= n; i++) {
//         if(i % 2 === 1) {
//             answer.push(i);
//         }
//     }
    
//     return answer;
// }
// function solution(left, right) {
//     var answer = 0;
//     return answer;
// }

// 약수를 구한다
// 갯수를 센다
// 홀수면 더하고, 짝수면 빼준다

function solution(left, right) {
    let answer = 0;
    //let cnt=1;

      for(let i=left; i<=right; i++) {
        let cnt = 1;
          
        for(let a=2; a<=i; a++) { // 약수 구하기
          if(i%a == 0) cnt++;
        }
          console.log(cnt)

        if(cnt % 2 == 0) answer += i; // 짝수는 더하고
        else answer -= i; // 홀수는 빼고
      }
    //console.log(cnt)
    return answer;
}
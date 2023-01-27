// 약수를 구한다
// 총 약수의 갯수를 센다
// 홀수면 값을 더하고, 짝수면 빼준다
// 반복한다

function solution(left, right) {
    var answer = 0;
    for(let i=left ; i<=right ; i++){
      let cnt=1; //약수는 최소 1개
      for(let a=2; a<=i; a++){
          if(i%a===0)cnt++; // 약수 갯수 구하기
      }
      cnt % 2 == 0 ? answer += i : answer -= i;  //짝수 더하고, 홀수 빼기
    }
    return answer;
}


// 제곱수를 이용하는 방법
// function solution(left, right) {
//   let answer = 0;
//   for(let i=left; i<=right; i++) {
//       Number.isInteger(Math.sqrt(i))?answer -= i:answer += i;
//   }
//   return answer;
// }

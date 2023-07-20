// function solution(numbers) {
//     var answer = [];
// for(i=0;i<numbers.length;i++){
//      answer[i] = numbers[i]*2
// }
//     console.log(answer)
//     return answer;
// }

//map 사용
function solution(numbers) {
  let answer = numbers.map((numbers)=>numbers*2)
  return answer
}
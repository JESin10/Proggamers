// 1. 배열의 숫자 중 디비저와 나누어 떨어지는지 확인
// 2. 나누어 떨어지는 애들을 새배열로 푸시
// 3. 디비저도 새배열로 푸시
// 4. 오름차순 정렬
// 5. 나누어 떨어지는 애들이 없을 경우, 리턴 -1

// 풀어쓴 버전
// function solution(arr, divisor) {
//     let answer = [];
//     let re = arr.filter(function(a){return a%divisor===0;})
//     answer = re.sort(function(a, b){return a-b;});
//     if(answer.length===0){
//         answer = [-1];
//     } 
//     return answer;
// };

// 줄여본 버전
function solution(arr, divisor) {
    let re = arr.filter(a=> a%divisor===0).sort((a, b)=> a-b);
    return re.length===0 ? [-1] : re;
};

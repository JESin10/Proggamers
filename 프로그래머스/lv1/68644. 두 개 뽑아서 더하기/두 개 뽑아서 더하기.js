// 1. n[0]+n[1]~n[length], n[1]+n[2]~n[legnth]
// 2. 더한값들로 배열 만들기
// 3. 중복제거 후 출력

//최대한 줄여보자
function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
          answer.push(numbers[i] + numbers[j]);
        }
    }
    let result = new Set(answer.sort((a, b)=>a-b));
    //console.log(result)
    return [...result];
}

// function solution(numbers) {
//     var answer = [];
//     for(let i=0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//           answer.push(numbers[i] + numbers[j]);
//         }
//     }
//     answer.sort((a, b)=>a-b));
//     let result = new Set(answer); // let EX = new Set (); : 중복된 값을 제거한 리스트 출력
//     return [...result];
// }

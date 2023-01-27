function solution(N)
{
    return String(N).split('').reduce((a, b)=> a + b *1 , 0); 
}


// function solution(N) {
//     var answer = 0;
//     let arr = Array.from(String(N));
//     for(let i=0;i<arr.length;i++){
//         answer += parseInt(arr[i]);
//     }
//     return answer;
// }
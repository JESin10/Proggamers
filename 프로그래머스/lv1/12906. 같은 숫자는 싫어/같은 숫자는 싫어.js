// function solution(arr)
// {
//     var answer = [];
//     for(let i=0;i<arr.length;i++){
//        if(arr[i]!=arr[i+1]){
//            answer.push(arr[i]);
//        } 
//     }
//     console.log(answer)
//     return answer;
// }

function solution(arr)
{
    // var answer = [];
    // for(let i=0;i<arr.length;i++){
    //    arr[i]!=arr[i+1] ? answer.push(arr[i]):answer;
    // } 
    // return answer;
    return arr.filter((v, i)=>v!=arr[i+1])
}
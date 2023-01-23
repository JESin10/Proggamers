function solution(array, height) {
    var answer = 0;
    let i = 0;
    let arr = array.sort(function(a, b){
        return b-a;
    });
    while (arr[i]>height){
        i++;
        answer = i;
    }
    return answer;
}

// 틀린 코드
// function solution(array, height) {
//     var answer = 0;
//     let arr = array.sort(function(a, b){
//         return b-a;
//     })
//     for(let i=0;i<height.length;i++){
//         if(arr[i]>height){
//             answer = i+1;
//         } else{
//             answer = height.length-i;
//         }
//     }
//     return answer;
// }
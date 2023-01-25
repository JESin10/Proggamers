function solution(my_string, n) {
    var answer = '';
    let arr = my_string.split('');
    for(let i =0;i<my_string.length;i++){
        arr[i] = arr[i].repeat(n); 
    }
    return arr.join('');
}


// 비슷하지만 다른풀이
// function solution(my_string, n) {
//     var answer = '';
//     let arr = my_string.split('');
//     for(let i =0;i<my_string.length;i++){
//         answer += arr[i].repeat(n);
//     }
//     return answer;
// }
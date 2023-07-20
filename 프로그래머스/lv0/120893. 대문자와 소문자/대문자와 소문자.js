function solution(my_string) {
    let arr= [...my_string]
    let answer = []; 

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === arr[i].toUpperCase()) {
            answer.push(arr[i].toLowerCase());
        } else { 
            answer.push(arr[i].toUpperCase()); 
        }
    }
    return answer.join(""); 
}

//map 사용
//function solution(my_string) {
//    let answer = my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase())
//이때 n이 arr[1]과 같이 배열의 각 문자를 의미
//    return answer.join('')
//}

function solution(my_string, letter) {
    var answer = '';
    answer = my_string.replaceAll(letter,'');  // replace는 문자열, replaceAll은 정규식
    return answer;
}


// 다른 풀이 ) letter를 기준으로 분해후 join으로 다시 붙이는 방법

// function solution(my_string, letter) {
//     const answer = my_string.split(letter).join('')
//     return answer;
// }

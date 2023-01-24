// function solution(my_string) {
//     var answer = '';
//     let vowels = /['a','e','i','o','u']/g;
//     answer = my_string.replace(vowels,'');
//     return answer;
// }

function solution(my_string) {
    let answer = '';
    answer = my_string.replace(/['a','e','i','o','u']/g,''); 
    return answer;
}
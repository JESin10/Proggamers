function solution(my_string) {
    var answer = "";
    let result = my_string.split('').reverse()
    answer = result.join(''); // join()으로 분리된 문자 다시 합치기
    return answer;
}

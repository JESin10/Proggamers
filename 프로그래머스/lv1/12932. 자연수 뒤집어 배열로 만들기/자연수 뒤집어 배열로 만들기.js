function solution(n) {
    // 풀어쓰기 (숫자->문자열.문자열->배열.뒤집기.배열의문자->숫자)
    // let answer = String(n).split('').reverse().map(function(num){return Number(num)});
    // return answer;
    
    //줄여쓰기
    return String(n).split('').reverse().map(num=> Number(num));
}

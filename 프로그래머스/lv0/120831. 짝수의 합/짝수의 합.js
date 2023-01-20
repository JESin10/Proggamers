function solution(n) {
    var answer = 0;
    let odd = parseInt(n/2);
    answer = odd*(odd+1);

    return answer;
}
function solution(n, k) {
    let answer = 0;
    // let service = parseInt( n / 10);

    answer = n*12000 + (k-parseInt( n / 10))*2000;
    return answer;
}
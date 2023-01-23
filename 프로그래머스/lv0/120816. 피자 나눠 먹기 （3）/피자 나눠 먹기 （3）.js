function solution(slice, n) {
    let answer = 1;
    if(n%slice==0){
        answer = parseInt(n/slice);
    } else{
        answer = parseInt(n/slice)+1;
    }
    return answer;
}
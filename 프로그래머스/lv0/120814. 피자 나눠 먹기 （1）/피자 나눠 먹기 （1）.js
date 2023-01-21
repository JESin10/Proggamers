function solution(n) {
    var answer = 0;
    let count = parseInt(n/7);
    if(n%7!=0){
        answer = count+1;
        return answer;
    }
    else {return count;}
}
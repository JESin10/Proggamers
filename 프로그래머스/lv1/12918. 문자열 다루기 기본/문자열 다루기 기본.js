function solution(s) {
    var answer = true;
    if(s.includes("e")) {
        answer = false;
    } else if(s.length==4 || s.length==6){
        answer = !isNaN(s) ;
    } else {
        answer = false;
    }
    return answer;
}

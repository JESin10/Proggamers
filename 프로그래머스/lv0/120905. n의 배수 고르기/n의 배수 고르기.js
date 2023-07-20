function solution(n, numlist) {
    var answer = [];
    numlist.map((i)=>(i%n===0)?answer.push(i) : null)
    return answer;
}
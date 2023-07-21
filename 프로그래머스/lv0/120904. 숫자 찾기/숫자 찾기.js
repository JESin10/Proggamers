function solution(num, k) {
    let answer = num.toString().indexOf(k)+1
    if(answer===0) {answer= -1}
    return answer
}
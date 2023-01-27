//1. 수/박에서 홀수번째는 수, 짝수번째는 박을 넣는다.
//2. 찍히는 숫자만큼 수/박을 반복한다.

function solution(n) {
    var answer = [];
    for(let i=1;i<=n;i++){
        if(i%2===0){
            answer += "박";
        } else {
            answer += "수";
        }
    
    }
    return answer;
}

//다른 풀이
//1.참가자 명단을 완주자 명단과 비교
//2. 완주자 명단에 이름이 없으면 리턴

//줄여쓰기
function solution(participant, completion) {
    participant.sort();
    completion.sort();   //sort()를 생각하지 못함..
    
    return participant.find((a, b) => a !== completion[b]);
}

//풀어쓰기
// function solution(participant, completion) {
//     let c= participant.sort();
//     let d= completion.sort();
    
//     let answer = participant.find(function(a, b) {return a !== completion[b]});
//     return answer;
// }




    
    
    
    
    

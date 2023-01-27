// 공백을 기준으로 배열로 끊자
// 끊어진 각각의 배열의 원소를 분리해서 비교하자
// 각 원소의 순서를 확인해서 홀수번째를 대문자로 바꾸자
// 그리고 분리한 배열을 공백과 함께 다시 붙이자 

function solution(s) {
    var answer = '';    
    let arr = s.split(' '); //arr[0], arr[1], arr[2]
    //arr[a][b]라 두면
    for(let a=0 ; a<arr.length ; a++){
        for(let b=0 ; b<arr[a].length ; b++){
            if(b%2===0){
                answer += arr[a][b].toUpperCase();
            }else {
                answer += arr[a][b].toLowerCase();
            }   
        }
        if(a<arr.length-1){ //0부터 시작하므로 마지막에는 공백을 추가하면 안된다..
         answer += " ";
        }
    }
    console.log();
    return answer;
}


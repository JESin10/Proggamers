//1. 배열에서 최솟값을 찾자
//2. 최솟값을 제거하자   ++ 2.1특정 값 제거 : 인덱스 번호 필요
//3. 최솟값이 없다면 -1을 리턴하자.
//4. 최솟값을 제거한 나머지 배열을 보여주자.

function solution(arr) {
    var answer = [];
    if(arr.length<=1){
        answer.push(-1);				//3. 최솟값이 없다면 -1을 리턴하자.
    } else {
        let Arr = Math.min(...arr);     //1. 배열에서 최솟값을 찾자
        let inum = arr.indexOf(Arr);    //2.1특정 값 제거 : 인덱스 번호 필요
        arr.splice(inum,1);             //2. 최솟값을 제거하자
        answer = arr;                   //4. 최솟값을 제거한 나머지 배열을 보여주자.
    }
   return answer;
}





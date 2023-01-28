//1. 3으로 나눈 나머지를 구한다
//2. 구한 순서대로 쌓아준다. (배열 반전)
//3. 몫이 1보다 작아지기전까지 반복
//4. 반복이 끝나면 마지막 몫까지 합친 배열로 리턴
//5. 배열값 10진법으로 표현

function solution(n) {
    let arr=[];
    while((n/3)>=1){
        arr.push(parseInt(n%3));            // 3진법으로 나눈 나머지를 먼저 나온 순서대로 배열에 정렬(반전)
        n=n/3;
    }
    arr.push(Math.floor(n));                // 마지막에 남은 몫의 정수값 추가
    arr = arr.join('');                     // [0, 0, 0, 0]형태의 배열 값을 0000꼴로 만들기
    
    //위 코드를 줄인 버전
    //let arr = n.toString(3).split('').reverse().join('')
    
    return parseInt(arr,3)      // parseInt(x,n) : x를 n진법의 정수로 변환
}

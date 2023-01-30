function solution(s) {
    let E_num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    for(let i = 0; i < E_num.length; i++) {
        let arr = answer.split(E_num[i]);  //[one 4 seven eight] -> 해당하는 E_num을 기준으로 분해
        //console.log(arr);
        answer = arr.join(i); //현재의 i값이 연결해주는 것(교체 개념은 아닌듯함)
        console.log(answer);
    }
//    return parseInt(answer);
    return Number(answer); //숫자 타입의 문자열만 Number 타입으로 변환
}


//[ 'one4seveneight' ] [ '', '4seveneight' ] [ 'one4seveneight' ]
// one4seveneight 1 (-> i=1일때 연결해줌) 4seveneight 14seveneight
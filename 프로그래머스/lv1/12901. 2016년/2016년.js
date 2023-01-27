// 1/1이 금이므로 7나누기 나머지 0123456 순으로 날짜 목금토일월화수 배열
// 위 나머지는 1월에만 해당됨.
// 그러므로 다른 달은 지난 달의 날짜를 다 더해줘야 함
// 윤년이므로 [31, 29, 31, 30, 31, 30, 31, 31, 30, 31 , 30, 31]

function solution(a, b) {
    let answer = 0;
    let day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let Eachdate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31 , 30, 31];
    // 1월부터 (a-1)월까지의 지난 날을 더해준다

    for(let i=1;i<a;i++){   //0월부터가 아니므로 1부터시작 주의
        answer +=Eachdate[i-1];
    }    
    //console.log((answer+b)%7)
    return day[(answer+b)%7];
}
    

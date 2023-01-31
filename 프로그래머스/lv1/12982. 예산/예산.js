// 적은 금액부터 지원해주면 최대한 많이 가능
// d 오름차순 정렬
// 예산을 넘지 않는 선에서 작은 수부터 합
// 예산을 넘으면 끝

function solution(d, budget) {
    let cnt = 0;
    let sum = 0;
    d = d.sort((a, b) => a-b );
    
    for(let i=0 ; i<d.length ; i++){
        sum += d[i];
        if(sum <= budget){
            cnt++;
        }else{
            break;
        }
    }
    return cnt;
}
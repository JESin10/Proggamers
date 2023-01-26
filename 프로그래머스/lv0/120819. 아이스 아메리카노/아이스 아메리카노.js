//parseInt를 사용한 답안
function solution(money) {
    let order = parseInt(money/5500);
    let change = money-(5500*order); 
    result = [order,change];
    return result;
}

//Math.floor로 해본 답안
// function solution(money) {
//     let order = Math.floor(money/5500);
//     let change = money-(5500*order); 
//     return [order,change];    
// }

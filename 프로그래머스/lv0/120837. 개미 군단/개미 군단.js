// function solution(hp) {
//     var answer = 0;
//     let g_ant = 5;
//     let m_ant = 3;
//     let n_ant = 1;
//     while(hp>0){
//         if(hp>g_ant || hp==g_ant){
//             hp=hp-g_ant;
//             answer = answer+1 ;    
//         } else if(hp>m_ant || hp==m_ant) {
//             hp=hp-m_ant;
//             answer = answer+1;
//         } else if(hp>n_ant || hp==n_ant) {
//             hp=hp-n_ant;
//             answer = answer+1;
//         }
//     }
//     return answer;
// }


// var solution=h=>a=~~(h/5)+~~(h%5/3)+h%5%3
// 더블틸트연산자를 활용 math.floor와 동일한 기

function solution(hp) {
    var answer = 0;
    let g_ant = 5;
    let m_ant = 3;
    let n_ant = 1;
    while(hp>0){
        if(hp>=g_ant){
            hp=hp-g_ant;
            answer = answer+1 ;    
        } else if(hp>=m_ant) {
            hp=hp-m_ant;
            answer = answer+1;
        } else if(hp>=n_ant) {
            hp=hp-n_ant;
            answer = answer+1;
        }
    }
    return answer;
}

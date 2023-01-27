// function solution(n) {
//     let answer = [...''+n].sort((a,b)=>b-a).join('');
//     return Number(answer);
// }


// 한줄
function solution(n) {
    return Number([...''+n].sort((a,b)=>b-a).join(''));
}

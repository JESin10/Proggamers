function solution(n) {
    let answer = [...''+n].sort((a,b)=>b-a).join('');
    return Number(answer);
}

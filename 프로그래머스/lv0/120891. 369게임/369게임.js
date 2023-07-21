function solution(order) {
    var answer = 0;
    let sol = String(order).split('')
    sol.map((n)=>(n%3===0 && n!=0)?answer++ : null)
    return answer;
}
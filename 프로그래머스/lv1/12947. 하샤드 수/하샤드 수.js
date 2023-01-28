// 줄인버전
function solution(x) {
    var answer = true;
    let num = [...''+x].map(a=> Number(a)).reduce((b, c)=> b+c);
    return x%num==0 ? true : false; 
}

//풀어쓴 버전
// function solution(x) {
//     var answer = true;
//     let arr = [...''+x];
//     //let sum = arr.reduce(function(a, b){return a+b;})
//     let num = arr.map(function(i){return Number(i)}).reduce((a, b)=> a+b);
//     if(x%num==0){answer = true;} 
//     else {answer = false;}
    
//    return answer;
// }
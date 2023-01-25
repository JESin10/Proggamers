function solution(n) {
    var answer = 0;
    //let num = String(n);
    let arr = Array.from(String(n));
    for(let i=0;i<arr.length;i++){
        answer += parseInt(arr[i]);
    }
    return answer;
}
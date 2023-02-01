function solution(s) {
    var arr = [];
    let s_arr = String(s).split(" ").sort((a,b)=>a-b); 
    
    let max = s_arr[s_arr.length-1];
    let min = s_arr[0];
    
    arr.push(min, max);
    
    return arr.join(' ');
}
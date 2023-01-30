function solution(lottos, win_nums) {
    var answer = [];
    
    let num = lottos.filter(a => win_nums.includes(a)).length;   
    let num_zero = lottos.filter(a => a==0 || win_nums.includes(a)).length; 

    let low = (num < 2)? 6: 7-num;
    let high =  (num_zero==6) ? 1: 7-num_zero; 
    answer = (num_zero==0)?[low, low] : [high, low];
    return answer ;
}


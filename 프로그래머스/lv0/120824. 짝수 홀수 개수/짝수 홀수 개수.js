function solution(num_list) {
    let count_odd=0;
    let count_even=0;
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2==0){
            count_even ++;
        }else {
            count_odd ++;
        }
    }
    return [count_even, count_odd];
}
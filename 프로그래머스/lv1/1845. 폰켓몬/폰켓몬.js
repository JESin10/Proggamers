// 중복을 제거한다.
// 중복제거된 배열의 수가 N/2보다 크다면 답은 N/2
// 작다면 답은 배열의 길이

function solution(nums) {
    var answer = 0;
    let onlyone  = Array.from(new Set(nums)); // 중복제거 후 배열로
    let n2 = nums.length /2 ; 
    
    answer = (onlyone.length >= n2) ? n2 : onlyone.length
    
    return answer;
}

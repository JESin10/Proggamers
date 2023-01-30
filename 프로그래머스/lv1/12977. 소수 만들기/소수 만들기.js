// function solution(nums) {
//     let answer = 0;
//     let number= 0; 
//     let arr1 = [];

//     for(let i=0;i<nums.length-2;i++){
//         for(let j=i+1;j<nums.length-1;j++){
//             for(let l=j+1;l<nums.length;l++){
//                 let count=0;
//                 number=nums[i]+nums[j]+nums[l];
//                 for(let k=1;k<=number;k++){
//                     if(number%k==0) count++;
//                 }
//                 (count==2)? answer++:answer;
//             }
//         }
//     }
//     return answer;
// }


function solution(nums) {
  let answer = 0;
  let arr = [];
  
  for (let i = 0; i < nums.length-2; i++) {
    for (let j = i + 1; j < nums.length- 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let result = nums[i] + nums[j] + nums[k];
        //result가 소수냐? 아니면 answer +1
        let cnt=0
        for (let p = 1; p <=result; p++) {
          if (result % p == 0) {cnt++;}
          }
          (cnt==2)? answer++:answer;
        } 
      }
    }
  return answer;
}

//  arr.sort((a, b) => a - b).filter((a, i) => a != arr[i + 1]);
  //소수를 구하자 여기서?
  




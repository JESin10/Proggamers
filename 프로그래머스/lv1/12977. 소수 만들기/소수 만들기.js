// function solution(nums) {
//     var answer = 0;

//     for (let i = 0; i <nums.length-2; i ++) {
//         for (let j = i + 1; j < nums.length-1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 let number = (nums[i] + nums[j] + nums[k]);
//                 if(number % 2 !== 0 && checkPrime(number)) {
//                     answer++;
//                 }
//             }
//         }
//     }
//     return answer;
// }

// function checkPrime(target) {
//     for (let i = 3; i <= Math.sqrt(target); i+=2) {
//         if (target % i === 0) return false;
//     }
//     return true;
// }

// //반복문을 이용해 3개를 더한 숫자를 변수에 할당한다.
// //이 수를  자연수 1과 자기자신으로 나눈 나머지가 0이 나왔을때만 카운트1을 하고 아닐때는 카운트하지 않느다.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
function solution(nums) {
    var answer = 0, number=0;
    for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var l=j+1;l<nums.length;l++){
                number=nums[i]+nums[j]+nums[l];
                var count=0;
                for(var k=1;k<=number;k++){
                    if(number%k==0) count++;
                }
                if(count==2) answer++;
            }
        }
    }
    return answer;
}


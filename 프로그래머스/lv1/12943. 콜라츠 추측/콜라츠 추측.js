// function solution(num) {
//   let cnt = 0;

//   while (num != 1 && cnt != 500) {
//     num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
//     cnt++;
//   }
//   return num == 1 ? cnt : -1;
// }


function solution(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
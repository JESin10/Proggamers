function solution(my_string) {
    var answer = 0;
    let Allnum = my_string.match(/\d/g); // \d = [0-9] \d+는 한자리수 이상
    for(let i=0;i<Allnum.length;i++){
        answer += parseInt(Allnum[i]);
    }
    return answer;
}

// 다른풀이
// const result = arr.reduce(function add(sum, currValue) {
//   return sum + currValue;
// }, 0);
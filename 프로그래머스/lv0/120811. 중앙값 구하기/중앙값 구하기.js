function solution(array) {
    let sortingArr = [];
    sortingArr = array.sort((a,b) => a-b);
    
    let num= Math.floor((sortingArr.length)/2);
    let answer = sortingArr[num]
    console.log(answer)
    return answer
}

//간단 버전
//function solution(array) {
//  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
//}

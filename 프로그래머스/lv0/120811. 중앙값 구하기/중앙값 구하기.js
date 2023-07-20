function solution(array) {
    let sortingArr = [];
    sortingArr = array.sort((a,b) => a-b);
    
    let num= Math.floor((sortingArr.length)/2);
    let answer = sortingArr[num]
    console.log(answer)
    return answer
}
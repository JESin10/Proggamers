function solution(numbers) {
    var answer = 0;
    const sortedNum = numbers.sort((a, b) => b - a);
    const sol1 = sortedNum[0]*sortedNum[1]
    const sol2 = sortedNum.at(-1)*sortedNum.at(-2)
    //sortedNum.at(-1)*sortedNum.at(-2) : .at() 배열의 맨 마지막 요소 2개 불러오기
    console.log(sol1, sol2)
    answer = Math.max(sol1, sol2)
    return answer;
}
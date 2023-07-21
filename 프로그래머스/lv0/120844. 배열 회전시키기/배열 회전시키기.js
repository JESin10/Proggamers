function solution(numbers, direction) {
    if(direction==="right"){
        numbers.unshift(numbers.pop())
        //unshift(a) a를 배열 맨 앞에 추가
    } else {
        numbers.push(numbers.shift())
        //shift() 배열 0번 제거, 제거값 반환
    }
    return numbers;
}

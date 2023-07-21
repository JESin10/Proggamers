function solution(array) {
    var answer = [];
    let sol1 = Math.max(...array)
    answer = [sol1, array.indexOf(sol1)]
    return answer;
}
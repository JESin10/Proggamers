function solution(my_string) {
    let answer = my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n)
    return answer.sort().join("");
}
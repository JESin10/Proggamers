function solution(my_string) {
    let arr= my_string.replaceAll(/[^0-9]/g, "").split("").sort((a, b)=>a-b)
    return arr.map(Number);
}
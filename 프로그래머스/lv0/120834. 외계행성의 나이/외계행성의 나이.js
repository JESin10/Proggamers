function solution(age) {
    const Alphabet = ["a","b","c","d","e","f","g","h","i","j"]
    const sol = [...(''+age)]
    let answer = sol.map((n)=>n=Alphabet[n]).join("")
    return answer
}
function solution(n, m) {
    let gcd = 0;
    let lcm = 0;
    
    let num= n>m? n:m;
    
    for(let i=0;i<=n;i++){
        if(n%i==0 && m%i==0){
            gcd = i;
        }
    }
    lcm = (n*m)/gcd;
    return [gcd, lcm];
}
 
// n, m의 크기를 비교한다.
// 더 큰 수를 작은 수로 나눈다.
// 나머지가 나올 경우 그 나머지로 작은 수를 나눈다.
// 나머지가 0이 나오는 수가 최대공약수
// 두 수를 곱한 후, 최대공약수로 나눴을때 나오는 수가 최소 공배수

// function solution(n, m) {
//     const gcd =(a, b) => a % b === 0 ? b : gcd(b, a % b); //최대공약수
//     const lcm = (a, b) => a * b / gcd(a, b); // 최소 공배수
//     return [gcd(n, m), lcm(n, m)]
// }
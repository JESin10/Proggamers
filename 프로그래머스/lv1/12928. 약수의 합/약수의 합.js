function solution(n) {
    let arr = [...Array(n)].map((a, b)=> b+1) 
                .filter((c)=> n%c==0);
    return arr.reduce((a, b)=> a + b *1 , 0); 
}

// function solution(n) {
//     let arr = [];
//     for(let a=1; a<=n; a++){
//           if(n%a===0){
//           arr.push(a)} // 약수 갯수 구하기
//       }
//     //console.log(arr)
//     return arr.reduce((a, b)=> a + b *1 , 0); //더하기
// }



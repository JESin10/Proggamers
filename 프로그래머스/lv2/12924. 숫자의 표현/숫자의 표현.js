function solution(n) {
    var answer = 0;
    let arr = [];
    let count=0;
    
    for(let i=1;i<=n;i++){
        //n%i==0 ? arr.push(i): ''
        if(n%i==0 && i%2==1){
            count += 1;                    
        }
    }    
    //console.log(arr)
    return count;
}


//약수를 구해서 약수*n에서 n이 홀수라면 +1
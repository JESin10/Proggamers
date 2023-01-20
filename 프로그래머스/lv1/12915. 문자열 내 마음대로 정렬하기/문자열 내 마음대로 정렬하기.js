function solution(strings, n) {
    let answer = strings.sort(function(a, b){
        if(a[n]>b[n]){return 1;} //ba
        else if(a[n]<b[n]){return -1;} //ab
        else if(a>b) {return 1;} //a[n]=b[n]일때
        else if(a<b){return -1;}
        return 0;
    })
    return answer;
}


 
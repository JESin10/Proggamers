function solution(s) {
    var answer = '';
    let arr = [...''+s]
    // if(arr.length%2==0){
    //      answer = arr[(arr.length)/2-1]+arr[(arr.length)/2]
    //  } else {
    //      answer = arr[parseInt(arr.length/2)]
    //  }    
    return (arr.length%2==0)?arr[(arr.length)/2-1]+arr[(arr.length)/2]: arr[parseInt(arr.length/2)]
}
function solution (n) {
    let pizza = 6;
    let result = 0;
    if(n%6==0){
        result = n/6; 
    } else if(n%2==0){
        result = n/2;
    } else if(n%3==0){
        result = n/3;
    } else {
        result = n;
    }
    return result;
}

// function solution (n) {
//     let pizza = 6;
//     while(pizza % n !== 0) {
//         pizza +=6
//     } 
//     return pizza/6;
// }

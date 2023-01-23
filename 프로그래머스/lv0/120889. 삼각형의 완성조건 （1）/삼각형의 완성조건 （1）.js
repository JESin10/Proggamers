// function solution(sides) {
//     let answer = 0;
//     let triangle = sides.sort(function(a){
//         if(a[0]+a[1]>a[2]){
//             answer = 1;
//         }else if(a[0]+a[1]<a[2]){
//             answer = 2;
//         } else {
//             answer=1;
//         }
//     });
//     return answer;
// }

function solution(sides) {
    let answer = 0;
    let arrsides = sides.sort(function(a, b){
        return a-b;
    });
    if(arrsides[0]+arrsides[1]>arrsides[2]){
            answer = 1;
    }else if(arrsides[0]+arrsides[1]<=arrsides[2]){
            answer = 2;
    } 
    return answer;
}
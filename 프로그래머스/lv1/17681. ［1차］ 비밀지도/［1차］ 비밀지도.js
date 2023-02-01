// arr1, arr2 합쳐서 이진수 배열로 담고 그 길이만큼 반복
// 공백은 0, 벽은 1
// 공백은 지도 1,2가 모두 공백 &
// 벽은 지도 1,2 중 어느 하나라도 벽 |

function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0 ; i<n ; i++){
        let a = (arr1[i] | arr2[i]).toString(2);  // 어떻게 합칠지 | 연산자로 합.
        
        let arr=[];
        
        //for(let j=a.length-n ; j<a.length ; j++){ // 0부터 하니 테스트2에서 처음 공백이 나오지 않음
       for(let j=a.length-n ; j<a.length ; j++){
            if(a[j]==='1'){
                arr.push('#');
            } else{
            arr.push(' ');   
            }
         //console.log(arr)
        }
    answer.push(arr.join(''));
    }
    return answer;
}
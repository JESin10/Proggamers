// function solution(N, stages) {
//     var answer = [];
//     let totalNum = stages.length;
    
//     for(let i=1;i<N+1;i++){
//         let stage_n=stages.filter(c=>c==i).length
//         let fail = 0;
//         if(stage_n==0){
//             fail = 0;
//         } else {
//             fail = stage_n/(stages.length);
//         }
//        stage_n.length-1;
//         //totalNum -= stage_n;
//         answer.push({stage:i,fail:fail});
        
//     }
//     console.log(answer)
    
// }


function solution(N, stages) {
    let arr = [];
    let totalNum = stages.length;
    for (let i=1; i<=N; i++){
        // 현재 단계에서 실패한 유저수를 계산
        // 현재까지의 누적 도전자수를 나누어 실패율 계산
        // 현재까지의 누적 도전자수에 실패한 유저수 빼기
        let stageNum = stages.filter(ele=> ele==i).length
        let failRatio = 0;
        if (stageNum===0){
            failRatio = 0;
        }else{
            failRatio = (stageNum)/totalNum;
        }
        totalNum -= stageNum;
        arr.push({idx:i,ratio:failRatio});
    }
    // 실패율 내림차순으로 정렬하고 실패율이 같다면 stage 오름차순으로 정렬
    arr.sort((a,b)=>{
        if(a.ratio>b.ratio){
            return -1;
        }else if (a.ratio<b.ratio){
            return 1;
        }else{
            if(a.idx>b.idx){
                return 1;
            }else{
                return -1;
            }
        }
    })
    return arr.map(ele=>ele.idx);
}
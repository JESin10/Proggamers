function solution(N, stages) {
    let arr = [];
    let total = stages.length;

    for (let i=1; i<=N; i++){
        let stage_n = stages.filter(a=> a==i).length
        let failratio = 0;
        if (stage_n===0){
            failratio = 0;
        }else{
            failratio = (stage_n)/total;
        }
        total -= stage_n;
        arr.push({stage:i,failratio:failratio});
    }
    
    arr.sort((a,b)=>{
        if(a.failratio>b.failratio){
            return -1;
        }else if (a.failratio<b.failratio){
            return 1;
        }else{
            if(a.stage>b.stage){
                return 1;
            }else{
                return -1;
            }
        }
    })
    return arr.map(c=>c.stage);
}
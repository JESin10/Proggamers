function solution(rsp) {
    var answer = [];
    let sol = [...rsp]
    sol.map((i)=>
            {if(i==='2'){answer.push('0')}
        else if(i==='5'){answer.push('2')}
        else{answer.push('5')}}
    )
    let Answer = answer.join("")
    return  Answer.toString();
}
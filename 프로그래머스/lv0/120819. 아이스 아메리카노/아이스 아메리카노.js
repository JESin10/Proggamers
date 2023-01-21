function solution(money) {
    let result = [];
    let coffee = 5500;
    let order = parseInt(money/coffee);
    let change = money-(coffee*order); 
    result = [order,change];
    return result;
    
    
}
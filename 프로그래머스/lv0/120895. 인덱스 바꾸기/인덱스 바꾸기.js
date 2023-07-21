function solution(my_string, num1, num2){
   const splitedMyString = my_string.split('');
    // console.log(splitedMyString)
    [splitedMyString[num1], splitedMyString[num2]] = [splitedMyString[num2], splitedMyString[num1]];
    console.log(splitedMyString)

  return splitedMyString.join('');
}
